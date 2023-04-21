export type AttackModifier = 'minus-1' | 'minus-2' | 'plus-0' | 'plus-1' | 'plus-2';

export type Condition = 'disarm' | 'muddle' | 'rolling' | 'wound';

export type General = 'heal' | 'range' | 'target';

export type Element = 'dark';

export type Special = 'shadow';

export type Modifier = AttackModifier | Condition | General | Element | Special;
