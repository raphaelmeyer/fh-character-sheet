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
  blinkblade: [
    { id: 1, limit: 1, text: 'Remove one <minus-2> card' },
    { id: 2, limit: 2, text: 'Replace one <minus-1> card with one <plus-1> card' },
    { id: 3, limit: 2, text: 'Replace one <minus-1> card with one <plus-0> <wound> card' },
    { id: 4, limit: 2, text: 'Replace one <plus-0> card with one <plus-1> <immobilize> card' },
    {
      id: 5,
      limit: 3,
      text: 'Replace one <plus-0> card with one "Place this card in your active area. On your next attack, discard this card to add +2 <attack>" <rolling> card'
    },
    { id: 6, limit: 1, text: 'Replace two <plus-1> cards with two <plus-2> cards' },
    { id: 7, limit: 2, text: 'Add one <minus-1> "Gain 1 <time>" card' },
    { id: 8, limit: 2, text: 'Add one <plus-2> "<regenerate>, self" <rolling> card' },
    {
      id: 9,
      limit: 1,
      text: 'Whenever you short rest, you may spend one unspent <tap> item for no effect to <recover> a different spent item'
    },
    {
      id: 10,
      limit: 1,
      text: 'At the start of your first turn each scenario, you may perform <move> 3'
    },
    { id: 11, limit: 1, text: 'Whenever you would gain <immobilize>, prevent the condition' }
  ],
  boneshaper: [
    { id: 1, limit: 2, text: 'Replace one <minus-1> card with one <plus-0> <curse> card' },
    { id: 2, limit: 2, text: 'Replace one <minus-1> card with one <plus-0> <poison> card' },
    { id: 3, limit: 1, text: 'Replace one <minus-2> card with one <plus-0> card' },
    {
      id: 4,
      limit: 3,
      text: 'Replace one <plus-0> card with one <plus-1> "Kill the attacking summon to instead add <plus-4>" card'
    },
    { id: 5, limit: 2, text: 'Add three "<heal> 1, <target> <boneshaper>" <rolling> cards' },
    { id: 6, limit: 3, text: 'Add one <plus-2> <earth> <dark> card' },
    { id: 7, limit: 1, text: 'Ignore scenario effects and add two <plus-1> cards' },
    {
      id: 8,
      limit: 1,
      text: 'Immediately before each of your rests, you may kill one of your summons to perform <bless>, self'
    },
    {
      id: 9,
      limit: 1,
      text: 'Once each scenario, when any character ally would become exhausted by suffering <damage>, you may suffer <damage> 2 to reduce their hit point value to 1 instead'
    },
    {
      id: 10,
      limit: 2,
      text: 'At the start of each scenario, you may play a level 1 card from your hand to perform a summon action of the card'
    }
  ],
  deathwalker: [
    { id: 1, limit: 1, text: 'Remove two <minus-1> cards' },
    { id: 2, limit: 1, text: 'Replace one <minus-2> card with one <plus-0> card' },
    { id: 3, limit: 3, text: 'Replace one <minus-1> card with one <plus-1> card' },
    { id: 4, limit: 3, text: 'Replace one <plus-0> card with one <plus-1> <wound> card' },
    { id: 5, limit: 2, text: 'Add one <plus-2> <dark> card' },
    { id: 6, limit: 2, text: 'Add one <disarm> <rolling> card and one <muddle> <rolling> card' },
    { id: 7, limit: 2, text: 'Add two "<heal> 1, <target> 1 ally" <rolling> cards' },
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
