import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeIByI } from 'src/app/core/animations/fade-ibyi.animation';
import { fadeInAnimation } from 'src/app/core/animations/fade-in.animation';
import { PlayerStatsService } from 'src/app/shared/services/player-stats.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  animations: [fadeInAnimation, fadeIByI],
})
export class PlayerComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private playerStatsService: PlayerStatsService
  ) {}

  playerId?: string;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.playerId = routeParams.get('playerId') ?? undefined;
  }
}
