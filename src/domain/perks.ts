import type { CharacterClass } from './character';

export interface Perk {
  id: number;
  num: number;
  text: string;
}

export const perks: Record<CharacterClass, Perk[]> = {
  deathwalker: [
    { id: 1, num: 1, text: 'Remove two <-1> cards' },
    { id: 2, num: 1, text: 'Replace one <-2> card with one <+0> card' }
  ]
};
