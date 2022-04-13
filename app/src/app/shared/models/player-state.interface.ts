export interface PlayerState {
  playerId: string;
  playerName: string;
  currentState: {
    isOnline: boolean;
    since: number;
  };
  lastState?: {
    isOnline: boolean;
    for: number;
  };
}
