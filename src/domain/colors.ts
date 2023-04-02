import type { CharacterClass } from './character';

export interface Colors {
  primary: string;
  background: string;
}

export const colors: Record<CharacterClass, Colors> = {
  bannerspear: {
    primary: 'yellow-darken-1',
    background: 'yellow-lighten-3'
  },
  blinkblade: {
    primary: 'cyan-darken-1',
    background: 'cyan-lighten-4'
  },
  boneshaper: {
    primary: 'green-darken-3',
    background: 'green-lighten-4'
  },
  deathwalker: {
    primary: 'grey-darken-3',
    background: 'grey-lighten-3'
  },
  geminate: {
    primary: 'pink-darken-3',
    background: 'pink-lighten-4'
  }
};
