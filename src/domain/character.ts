export type CharacterClass =
  | 'bannerspear'
  | 'blinkblade'
  | 'boneshaper'
  | 'deathwalker'
  | 'geminate';

export interface Character {
  id: number;
  character: CharacterClass;
  name: string;
  xp: number;
  perks: number[];
}

export const characters: Record<CharacterClass, string> = {
  bannerspear: 'Human Banner Spear',
  blinkblade: 'Quatryl Blinkblade',
  boneshaper: 'Aesther Boneshaper',
  deathwalker: 'Valrath Deathwalker',
  geminate: 'Harrower Geminate'
};
