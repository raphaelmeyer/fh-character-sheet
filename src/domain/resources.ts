export type Resource =
  | 'lumber'
  | 'metal'
  | 'hide'
  | 'arrowvine'
  | 'axenut'
  | 'corpsecap'
  | 'flamefruit'
  | 'rockroot'
  | 'snowthistle';

export const resources: Record<Resource, string> = {
  lumber: 'Lumber',
  metal: 'Metal',
  hide: 'Hide',
  arrowvine: 'Arrowvine',
  axenut: 'Axenut',
  corpsecap: 'Corpsecap',
  flamefruit: 'Flamefruit',
  rockroot: 'Rockroot',
  snowthistle: 'Snowthistle'
};
