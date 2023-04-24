export type AttackModifier =
  | 'item-minus-1'
  | 'minus-1'
  | 'minus-2'
  | 'plus-0'
  | 'plus-1'
  | 'plus-2'
  | 'plus-3'
  | 'plus-4';

export type Condition = 'disarm' | 'muddle' | 'push' | 'rolling' | 'wound';

export type General = 'attack' | 'heal' | 'move' | 'range' | 'shield' | 'target';

export type Element = 'dark';

export type Special = 'shadow';

export type Modifier = AttackModifier | Condition | General | Element | Special;
