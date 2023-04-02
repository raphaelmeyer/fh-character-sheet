import type { Character, CharacterClass } from '@/domain/character';
import { defineStore } from 'pinia';

interface State {
  characters: Character[];
}

export const useCharacterStore = defineStore('character', {
  state: (): State => {
    return { characters: [] };
  },

  getters: {
    fetchCharacter: (state) => {
      return (id: number) => {
        return state.characters.find((ch) => ch.id === id);
      };
    }
  },

  actions: {
    createCharacter(character: CharacterClass, name: string): void {
      const id = Math.max(0, ...this.characters.map((c) => c.id)) + 1;
      this.characters.push({
        id: id,
        character: character,
        name: name,
        xp: 0,
        perks: []
      });
    }
  }
});
