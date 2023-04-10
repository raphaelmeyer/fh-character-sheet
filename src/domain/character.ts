export type Character =
  | 'bannerspear'
  | 'blinkblade'
  | 'boneshaper'
  | 'deathwalker'
  | 'drifter'
  | 'geminate';

export const characters: Record<Character, string> = {
  bannerspear: 'Human Banner Spear',
  blinkblade: 'Quatryl Blinkblade',
  boneshaper: 'Aesther Boneshaper',
  deathwalker: 'Valrath Deathwalker',
  drifter: 'Inox Drifter',
  geminate: 'Harrower Geminate'
};
