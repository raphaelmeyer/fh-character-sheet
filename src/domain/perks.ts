import type { Character } from './character';

export interface Perk {
  id: number;
  num: number;
  text: string;
}

export const perks: Record<Character, Perk[]> = {
  deathwalker: [
    { id: 1, num: 1, text: 'Remove two <minus-1> cards' },
    { id: 2, num: 1, text: 'Replace one <minus-2> card with one <plus-0> card' }
  ],
  bannerspear: [],
  blinkblade: [],
  boneshaper: [],
  geminate: []
};
