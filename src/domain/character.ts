import type { Resource } from './resources';

export type Character = 'bannerspear' | 'blinkblade' | 'boneshaper' | 'deathwalker' | 'geminate';

export type Resources = Record<Resource, number>;

export interface Mercenary {
  id: number;
  character: Character;
  name: string;
  xp: number;
  gold: number;
  resources: Resources;
  perks: number[];
}

export const characters: Record<Character, string> = {
  bannerspear: 'Human Banner Spear',
  blinkblade: 'Quatryl Blinkblade',
  boneshaper: 'Aesther Boneshaper',
  deathwalker: 'Valrath Deathwalker',
  geminate: 'Harrower Geminate'
};
