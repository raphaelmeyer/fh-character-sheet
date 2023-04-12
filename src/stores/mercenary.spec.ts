import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useMercenaryStore } from './mercenary';

describe('Mercenary store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('Store mercenaries', () => {
    it('should be empty on initialization', () => {
      const store = useMercenaryStore();

      expect(store.mercenaries).toHaveLength(0);
    });

    it('should create a new mercenary of a character with a name', () => {
      const store = useMercenaryStore();
      store.create('blinkblade', 'alice');

      expect(store.mercenaries).toHaveLength(1);
      const mercenary = store.mercenaries.at(0);
      expect(mercenary).toBeDefined();

      expect(mercenary?.character).toStrictEqual('blinkblade');
      expect(mercenary?.name).toStrictEqual('alice');
    });

    it('should create new mercenaries with default values', () => {
      const store = useMercenaryStore();
      store.create('boneshaper', 'betty');

      const mercenary = store.mercenaries.at(0);
      expect(mercenary).toBeDefined();

      expect(mercenary?.xp).toStrictEqual(0);
      expect(mercenary?.gold).toStrictEqual(0);
      expect(mercenary?.ticks).toStrictEqual(0);
      expect(mercenary?.perks).toHaveLength(0);
      expect(mercenary?.resources.metal).toStrictEqual(0);
      expect(mercenary?.resources.arrowvine).toStrictEqual(0);
      expect(mercenary?.resources.rockroot).toStrictEqual(0);
    });

    it('should create unique ids', () => {
      const store = useMercenaryStore();
      store.create('bannerspear', 'celine');
      store.create('deathwalker', 'dave');

      const ids = store.mercenaries.map((m) => m.id);
      expect(ids).toHaveLength(2);

      expect(ids.at(0)).toBeGreaterThan(0);
      expect(ids.at(1)).toBeGreaterThan(0);
      expect(ids.at(0) === ids.at(1)).toBeFalsy();
    });

    it('should store multiple mercenaries', () => {
      const store = useMercenaryStore();
      store.create('drifter', 'eliza');
      store.create('geminate', 'finn');
      store.create('bannerspear', 'gregory');

      expect(store.mercenaries).toHaveLength(3);
      expect(store.mercenaries).toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: 'eliza', character: 'drifter' }),
          expect.objectContaining({ name: 'finn', character: 'geminate' }),
          expect.objectContaining({ name: 'gregory', character: 'bannerspear' })
        ])
      );
    });

    it('should return a mercenary by its id', () => {
      const store = useMercenaryStore();
      store.create('blinkblade', 'heater');
      store.create('boneshaper', 'iris');
      store.create('deathwalker', 'jeremy');

      const ids = store.mercenaries.map((m) => m.id);
      expect(ids).toHaveLength(3);
      const iris = store.mercenaries.find((m) => m.name === 'iris');
      expect(iris).toBeDefined();

      expect(store.mercenaryById(iris?.id ?? NaN)).toStrictEqual(
        expect.objectContaining({
          name: 'iris',
          character: 'boneshaper'
        })
      );
    });

    it('should return undefined when a mercenary does not exist', () => {
      const store = useMercenaryStore();
      store.create('drifter', 'kelly');
      store.create('geminate', 'laura');
      store.create('bannerspear', 'mike');

      const ids = store.mercenaries.map((m) => m.id);
      const unknown = [12, 13, 14, 15].find((unused) => ids.every((id) => id !== unused));
      expect(unknown).toBeDefined();

      expect(store.mercenaryById(unknown ?? 0)).toBeUndefined();
    });
  });

  describe('Modify stats', () => {
    it('should change XP value', () => {
      const store = useMercenaryStore();
      store.create('blinkblade', 'nik');
      const id = store.mercenaries.at(0)?.id ?? NaN;

      expect(store.mercenaryById(id)?.xp).toStrictEqual(0);

      store.changeXp(id, 13);
      expect(store.mercenaryById(id)?.xp).toStrictEqual(13);

      store.changeXp(id, -7);
      expect(store.mercenaryById(id)?.xp).toStrictEqual(6);
    });

    it('should not drop XP below zero', () => {
      const store = useMercenaryStore();
      store.create('boneshaper', 'olivia');
      const id = store.mercenaries.at(0)?.id ?? NaN;
      store.changeXp(id, 4);

      store.changeXp(id, -7);
      expect(store.mercenaryById(id)?.xp).toStrictEqual(0);
    });
  });

  describe('Modify perks', () => {
    const setup = () => {
      const store = useMercenaryStore();
      store.create('deathwalker', 'pete');
      const id = store.mercenaries.at(0)?.id ?? NaN;

      return [store, id] as const;
    };

    it('should keep perks undefined or zero by default', () => {
      const [store, id] = setup();
      expect(store.mercenaryById(id)?.perks.at(5) ?? 0).toStrictEqual(0);
      expect(store.mercenaryById(id)?.perks.at(7) ?? 0).toStrictEqual(0);
    });

    it('should change perks', () => {
      const [store, id] = setup();

      store.changePerk(id, 5, 1);
      expect(store.mercenaryById(id)?.perks.at(5)).toStrictEqual(1);

      store.changePerk(id, 5, 1);
      expect(store.mercenaryById(id)?.perks.at(5)).toStrictEqual(2);

      store.changePerk(id, 5, -2);
      store.changePerk(id, 7, 1);
      expect(store.mercenaryById(id)?.perks.at(5)).toStrictEqual(0);
      expect(store.mercenaryById(id)?.perks.at(7)).toStrictEqual(1);
    });

    it('should not drop below zero', () => {
      const [store, id] = setup();

      store.changePerk(id, 4, 1);
      store.changePerk(id, 4, -2);
      expect(store.mercenaryById(id)?.perks.at(4)).toStrictEqual(0);
    });

    it('should not exceed limit', () => {
      const [store, id] = setup();

      store.changePerk(id, 4, 5);
      expect(store.mercenaryById(id)?.perks.at(4)).toStrictEqual(3);

      store.changePerk(id, 4, 1);
      expect(store.mercenaryById(id)?.perks.at(4)).toStrictEqual(3);
    });
  });
});
