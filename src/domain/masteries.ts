import type { Character } from './character';

export type Mastery = 'first' | 'second';

type Masteries = Record<Mastery, string>;

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
