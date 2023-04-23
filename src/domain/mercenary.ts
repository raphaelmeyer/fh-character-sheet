import type { Character } from './character';
import type { Mastery } from './masteries';
import type { Resources } from './resources';

function emptyBag(): Resources {
  return {
    lumber: 0,
    metal: 0,
    hide: 0,
    arrowvine: 0,
    axenut: 0,
    corpsecap: 0,
    flamefruit: 0,
    rockroot: 0,
    snowthistle: 0
  };
}

export type Masteries = Record<Mastery, boolean>;

export class Mercenary {
  public xp: number = 0;
  public gold: number = 0;
  public resources: Resources = emptyBag();
  public ticks: number = 0;
  public perks: number[] = [];
  public masteries: Masteries = { first: false, second: false };

  constructor(
    public readonly id: number,
    public readonly character: Character,
    public readonly name: string
  ) {}
}
