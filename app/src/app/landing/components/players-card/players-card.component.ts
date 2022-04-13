import { Component, OnInit } from '@angular/core';
import { fadeIByI } from 'src/app/core/animations/fade-ibyi.animation';
import { OeloeserverService } from 'src/app/shared/services/oeloeserver.service';
import { PlayerState } from 'src/app/shared/models/player-state.interface';
import { OeloeserverWsService } from 'src/app/shared/services/oeloeserver-ws.service';

@Component({
  selector: 'app-players-card',
  templateUrl: './players-card.component.html',
  styleUrls: ['./players-card.component.scss'],
  animations: [],
})
export class PlayersCardComponent implements OnInit {
  constructor(private oeloeserver: OeloeserverService) {
    this.oeloeserver.getWsMessages().subscribe((s) => this.fetchData());
  }

  playersStats: PlayerState[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.oeloeserver.getAllPlayerStatus().then((states) => {
      this.playersStats = states.data;
    });
  }

  getTime(unix: number) {
    return new Date(unix);
  }
}
