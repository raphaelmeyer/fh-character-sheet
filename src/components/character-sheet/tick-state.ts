export type TickState = 'ticked' | 'last-ticked' | 'first-unticked' | 'unticked';

export function tickState(tick: number, numTicked: number): TickState {
  if (tick < numTicked - 1) {
    return 'ticked';
  } else if (tick === numTicked - 1) {
    return 'last-ticked';
  } else if (tick === numTicked) {
    return 'first-unticked';
  }
  return 'unticked';
}
