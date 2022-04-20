import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/core/animations/fade-in.animation';
import { PlayerName } from 'src/app/shared/models/player-name.interface';
import { PlayerStatsService } from 'src/app/shared/services/player-stats.service';
import { PlayerStatusService } from 'src/app/shared/services/player-status.service';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss'],
  animations: [fadeInAnimation],
})
export class StatsCardComponent implements OnInit {
  constructor(
    private playerStatsService: PlayerStatsService,
    private playerStatusService: PlayerStatusService
  ) {}

  public players: PlayerName[] = [];

  ngOnInit(): void {
    this.playerStatusService
      .getPlayerNames()
      .then((names) => (this.players = names));
    this.playerStatsService
      .getStatsOfPlayer('2d7ead4d-b47a-4602-b660-e119d691adaa')
      .then((r) => console.log(r));
  }
}
