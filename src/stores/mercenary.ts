import type { Mercenary, Character } from '@/domain/character';
import { defineStore } from 'pinia';

interface State {
  mercenaries: Mercenary[];
}

export const useMercenaryStore = defineStore('character', {
  state: (): State => {
    return { mercenaries: [] };
  },

  getters: {
    mercenaryById: (state) => {
      return (id: number) => {
        return state.mercenaries.find((m) => m.id === id);
      };
    }
  },

  actions: {
    create(character: Character, name: string): void {
      const id = Math.max(0, ...this.mercenaries.map((m) => m.id)) + 1;
      this.mercenaries.push({
        id: id,
        character: character,
        name: name,
        xp: 0,
        gold: 0,
        resources: {
          lumber: 0,
          metal: 0,
          hide: 0,
          arrowvine: 0,
          axenut: 0,
          corpsecap: 0,
          flamefruit: 0,
          rockroot: 0,
          snowthistle: 0
        },
        perks: []
      });
    },

    changeXp(id: number, diff: number): void {
      const mercenary = this.mercenaryById(id);
      if (mercenary) {
        mercenary.xp += diff;
      }
    },

    changeGold(id: number, diff: number): void {
      const mercenary = this.mercenaryById(id);
      if (mercenary) {
        mercenary.gold += diff;
      }
    },

    changeResource(id: number, resource: Resource, diff: number): void {
      const mercenary = this.mercenaryById(id);
      if (mercenary) {
        mercenary.resources[resource] += diff;
      }
    }
  }
});
