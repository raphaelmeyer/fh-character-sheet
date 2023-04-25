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
  blinkblade: {
    first: 'Declare Fast for seven consecutive rounds',
    second: 'Never be targeted by an attack'
  },
  boneshaper: {
    first: 'Kill at least fifteen of your summons',
    second:
      'Play a summon action on your first turn, have the summon kill at least six enemies, and keep it alive for the entire scenario'
  },
  deathwalker: {
    first: 'Remove seven <shadow> in one round',
    second: 'Place or remove at least one <shadow> each round'
  },
  drifter: { first: '', second: '' },
  geminate: {
    first: 'Switch forms each round',
    second: 'Lose at least one ability card each round'
  }
};
