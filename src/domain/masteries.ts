import type { Character } from './character';

export type Mastery = 'first' | 'second';

type Masteries = Record<Mastery, string>;

export const masteries: Record<Character, Masteries> = {
  bannerspear: {
    first:
      'Attack at least three enemies with each of three different area of effect attack abilities',
    second:
      'Perform a Banner summon abiltiy on your first turn, keep the banner alive and within <range> 3 of you for the entire scenario'
  },
  blinkblade: { first: '', second: '' },
  boneshaper: { first: '', second: '' },
  deathwalker: {
    first: 'Remove seven <shadow> in one round',
    second: 'Place or remove at least one <shadow> each round'
  },
  drifter: { first: '', second: '' },
  geminate: { first: '', second: '' }
};
