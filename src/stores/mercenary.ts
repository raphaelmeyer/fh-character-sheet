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
        return state.mercenaries.find((ch) => ch.id === id);
      };
    }
  },

  actions: {
    create(character: Character, name: string): void {
      const id = Math.max(0, ...this.mercenaries.map((c) => c.id)) + 1;
      this.mercenaries.push({
        id: id,
        character: character,
        name: name,
        xp: 0,
        perks: []
      });
    }
  }
});
