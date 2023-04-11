import type { Character } from './character';

export interface Perk {
  id: number;
  num: number;
  text: string;
}

export const perks: Record<Character, Perk[]> = {
  bannerspear: [],
  blinkblade: [],
  boneshaper: [],
  deathwalker: [
    { id: 1, num: 1, text: 'Remove two <minus-1> cards' },
    { id: 2, num: 1, text: 'Replace one <minus-2> card with one <plus-0> card' },
    { id: 3, num: 3, text: 'Replace one <minus-1> card with one <plus-1> card' },
    { id: 4, num: 3, text: 'Replace one <plus-0> card with one <plus-1> <wound> card' },
    { id: 5, num: 2, text: 'Add one <plus-2> <dark> card' },
    { id: 6, num: 2, text: 'Add one <disarm> <rolling> card and one <muddle> <rolling> card' },
    { id: 7, num: 2, text: 'Add two <heal> 1, <target> 1 ally <rolling> cards' },
    { id: 8, num: 1, text: 'Ignore scenario effects' },
    { id: 9, num: 1, text: 'Whenever you long rest, you may move one shadow up to three hexes' },
    {
      id: 10,
      num: 1,
      text: 'Whenever you short rest, you may consume <dark> to perform <muddle>, <wound>, <range> 2 as if you were occupying a hex with a shadow'
    },
    {
      id: 11,
      num: 1,
      text: 'While you are occupying a hex with a shadow, all attacks targeting you gain disadvantage'
    }
  ],
  drifter: [],
  geminate: []
};
