import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeIByI } from 'src/app/core/animations/fade-ibyi.animation';
import { fadeInAnimation } from 'src/app/core/animations/fade-in.animation';
import { PlayerState } from 'src/app/shared/models/player-state.interface';
import { OeloeserverStateService } from 'src/app/shared/services/oeloeserver-state.service';
import { PlayerStatusService } from 'src/app/shared/services/player-status.service';

@Component({
  selector: 'app-players-card',
  templateUrl: './players-card.component.html',
  styleUrls: ['./players-card.component.scss'],
  animations: [fadeIByI, fadeInAnimation],
})
export class PlayersCardComponent implements OnInit {
  constructor(
    private playerStatusService: PlayerStatusService,
    private oeloeserverStateService: OeloeserverStateService
  ) {
    this.oeloeserverStateService
      .getMessages()
      .subscribe((_message) => this.fetchData());
  }

  playersStats: PlayerState[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData(): Promise<void> {
    try {
      console.log('Getting all player!');
      this.playersStats = await this.playerStatusService.getStatusOfPlayers();
    } catch (e: any) {
      console.log('errortje', e);
    }
  }

  getTime(unix: number) {
    return new Date(unix);
  }
}
