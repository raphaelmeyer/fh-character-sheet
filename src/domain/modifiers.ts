export type AttackModifier =
  | 'double'
  | 'item-minus-1'
  | 'minus-1'
  | 'minus-2'
  | 'plus-0'
  | 'plus-1'
  | 'plus-2'
  | 'plus-3'
  | 'plus-4';

export type Condition =
  | 'bless'
  | 'brittle'
  | 'curse'
  | 'disarm'
  | 'immobilize'
  | 'muddle'
  | 'pierce'
  | 'poison'
  | 'push'
  | 'regenerate'
  | 'rolling'
  | 'wound';

export type General =
  | 'attack'
  | 'damage'
  | 'heal'
  | 'move'
  | 'range'
  | 'recover'
  | 'shield'
  | 'single-hand'
  | 'tap'
  | 'target';

export type Element = 'earth' | 'dark' | 'wild';

export type Special = 'boneshaper' | 'shadow' | 'time';

export type Modifier = AttackModifier | Condition | General | Element | Special;
