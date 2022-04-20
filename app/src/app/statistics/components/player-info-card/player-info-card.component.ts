import { Component, Input, OnInit } from '@angular/core';
import { PlayerState } from 'src/app/shared/models/player-state.interface';
import { PlayerStats } from 'src/app/shared/models/player-stats.interface';
import { PlayerStatsService } from 'src/app/shared/services/player-stats.service';
import { PlayerStatusService } from 'src/app/shared/services/player-status.service';
import { getTime } from 'src/app/shared/helpers/time.helper';

@Component({
  selector: 'app-player-info-card',
  templateUrl: './player-info-card.component.html',
  styleUrls: ['./player-info-card.component.scss'],
})
export class PlayerInfoCardComponent implements OnInit {
  @Input() public playerId?: string;
  public playerStats?: PlayerStats;
  public playerState?: PlayerState;

  constructor(
    private playerStatsService: PlayerStatsService,
    private playerStatusService: PlayerStatusService
  ) {}

  ngOnInit(): void {
    this.playerStatsService
      .getStatsOfPlayer(this.playerId ?? '')
      .then((pstats) => {
        this.playerStats = pstats;
      });
    this.playerStatusService
      .getStatusOfPlayerById(this.playerId ?? '')
      .then((pstate) => {
        this.playerState = pstate;
      });
  }

  getTime(unix: number) {
    return getTime(unix);
  }
}
