import type { Character } from '@/domain/character';
import { Mercenary } from '@/domain/mercenary';
import type { Resource } from '@/domain/resources';
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
      this.mercenaries.push(new Mercenary(id, character, name));
    },

    changeXp(id: number, diff: number): void {
      const mercenary = this.mercenaryById(id);
      if (mercenary) {
        mercenary.xp = Math.max(0, mercenary.xp + diff);
      }
    },

    changeGold(id: number, diff: number): void {
      const mercenary = this.mercenaryById(id);
      if (mercenary) {
        mercenary.gold = Math.max(0, mercenary.gold + diff);
      }
    },

    changeResource(id: number, resource: Resource, diff: number): void {
      const mercenary = this.mercenaryById(id);
      if (mercenary) {
        mercenary.resources[resource] = Math.max(0, mercenary.resources[resource] + diff);
      }
    }
  }
});
