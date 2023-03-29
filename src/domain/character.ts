export type CharacterClass = 'deathwalker';

export interface Character {
  id: number;
  character: CharacterClass;
  name: string;
  xp: number;
  perks: number[];
}

export const characters: Record<CharacterClass, string> = {
  deathwalker: 'Valrath Deathwalker'
};
