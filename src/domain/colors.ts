import type { Character } from './character';

export interface Colors {
  primary: string;
  background: string;
}

export const colors: Record<Character, Colors> = {
  bannerspear: {
    primary: 'yellow-darken-1',
    background: 'yellow-lighten-5'
  },
  blinkblade: {
    primary: 'cyan-darken-1',
    background: 'cyan-lighten-5'
  },
  boneshaper: {
    primary: 'green-darken-4',
    background: 'green-lighten-5'
  },
  deathwalker: {
    primary: 'blue-grey-darken-4',
    background: 'blue-grey-lighten-5'
  },
  drifter: {
    primary: 'grey-darken-3',
    background: 'grey-lighten-3'
  },
  geminate: {
    primary: 'pink-darken-4',
    background: 'pink-lighten-5'
  }
};
