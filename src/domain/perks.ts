import type { Character } from './character';

export interface Perk {
  id: number;
  limit: number;
  text: string;
}

export const perks: Record<Character, Perk[]> = {
  bannerspear: [],
  blinkblade: [],
  boneshaper: [],
  deathwalker: [
    { id: 1, limit: 1, text: 'Remove two <minus-1> cards' },
    { id: 2, limit: 1, text: 'Replace one <minus-2> card with one <plus-0> card' },
    { id: 3, limit: 3, text: 'Replace one <minus-1> card with one <plus-1> card' },
    { id: 4, limit: 3, text: 'Replace one <plus-0> card with one <plus-1> <wound> card' },
    { id: 5, limit: 2, text: 'Add one <plus-2> <dark> card' },
    { id: 6, limit: 2, text: 'Add one <disarm> <rolling> card and one <muddle> <rolling> card' },
    { id: 7, limit: 2, text: 'Add two <heal> 1, <target> 1 ally <rolling> cards' },
    { id: 8, limit: 1, text: 'Ignore scenario effects' },
    {
      id: 9,
      limit: 1,
      text: 'Whenever you long rest, you may move one <shadow> up to three hexes'
    },
    {
      id: 10,
      limit: 1,
      text: 'Whenever you short rest, you may consume <dark> to perform <muddle>, <wound>, <range> 2 as if you were occupying a hex with a <shadow>'
    },
    {
      id: 11,
      limit: 1,
      text: 'While you are occupying a hex with a <shadow>, all attacks targeting you gain disadvantage'
    }
  ],
  drifter: [],
  geminate: []
};

export interface Masteries {
  first: string;
  second: string;
}

export const masteries: Record<Character, Masteries> = {
  bannerspear: { first: '', second: '' },
  blinkblade: { first: '', second: '' },
  boneshaper: { first: '', second: '' },
  deathwalker: {
    first: 'Remove seven <shadow> in one round',
    second: 'Place or remove at least one <shadow> each round'
  },
  drifter: { first: '', second: '' },
  geminate: { first: '', second: '' }
};
