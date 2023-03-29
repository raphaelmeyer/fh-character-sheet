import type { CharacterClass } from './character';

export interface Colors {
  primary: string;
  background: string;
}

export const colors: Record<CharacterClass, Colors> = {
  deathwalker: {
    primary: 'grey-darken-3',
    background: 'grey-lighten-3'
  }
};
