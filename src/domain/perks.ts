import type { Character } from './character';

export interface Perk {
  id: number;
  limit: number;
  text: string;
}

export const perks: Record<Character, Perk[]> = {
  bannerspear: [
    { id: 1, limit: 3, text: 'Replace one <minus-1> card with one "<shield> 1" <rolling> card' },
    {
      id: 2,
      limit: 2,
      text: 'Replace one <plus-0> card with one <plus-1> "Add +1 <attack> for each ally adjacent to the target" card'
    },
    { id: 3, limit: 2, text: 'Add one <plus-1> <disarm> card' },
    { id: 4, limit: 2, text: 'Add one <plus-2> <push> 1 card' },
    { id: 5, limit: 2, text: 'Add two <plus-1> <rolling> cards' },
    { id: 6, limit: 2, text: 'Add two "<heal> 1, self" <rolling> cards' },
    { id: 7, limit: 1, text: 'Ignore item <item-minus-1> effects and remove one <minus-1> card' },
    {
      id: 8,
      limit: 1,
      text: 'At the end of each of your long rests, grant one ally within <range> 3: <move> 2'
    },
    { id: 9, limit: 1, text: 'Whenever you open a door with a move ability, add +3 <move>' },
    {
      id: 10,
      limit: 2,
      text: 'Once each scenario, during your turn, gain <shield> 2 for the round'
    }
  ],
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
