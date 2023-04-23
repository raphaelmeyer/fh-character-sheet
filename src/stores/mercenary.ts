import type { Character } from '@/domain/character';
import type { Mastery } from '@/domain/masteries';
import { Mercenary } from '@/domain/mercenary';
import { perks } from '@/domain/perks';
import type { Resource } from '@/domain/resources';
import { defineStore } from 'pinia';

interface State {
  mercenaries: Mercenary[];
}

export const useMercenaryStore = defineStore('character', {
  state: (): State => {
    return { mercenaries: [] };
  },

  storage: true,

  getters: {
    mercenaryById: (state) => {
      return (id: number): Mercenary | undefined => {
        return state.mercenaries.find((m) => m.id === id);
      };
    },
    asJson(state): string {
      return JSON.stringify(state.mercenaries);
    }
  },

  actions: {
    fromJson(data: string): void {
      const mercenaries = JSON.parse(data);
      this.mercenaries = mercenaries;
    },

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
    },

    changeTicks(id: number, diff: number): void {
      const mercenary = this.mercenaryById(id);
      if (mercenary) {
        mercenary.ticks = Math.max(0, Math.min(18, mercenary.ticks + diff));
      }
    },

    changePerk(id: number, perkId: number, diff: number): void {
      const mercenary = this.mercenaryById(id);
      if (mercenary === undefined) {
        return;
      }

      const perk = perks[mercenary.character].find((p) => p.id === perkId);
      if (perk === undefined) {
        return;
      }

      const value = diff + (mercenary.perks.at(perkId) ?? 0);
      mercenary.perks[perkId] = Math.max(0, Math.min(perk.limit, value));
    },

    toggleMastery(id: number, mastery: Mastery): void {
      const mercenary = this.mercenaryById(id);
      if (mercenary) {
        mercenary.masteries[mastery] = !mercenary.masteries[mastery];
      }
    }
  }
});
