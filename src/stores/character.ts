import type { Character } from '@/domain/character';
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
  }
});
