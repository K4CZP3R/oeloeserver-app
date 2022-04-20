export interface PlayerStats {
  playerId: string;
  stats: { [key: string]: string | { [key: string]: string } };
}
