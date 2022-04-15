import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/core/animations/fade-in.animation';
import { ServerStatus } from 'src/app/shared/models/server-status.interface';
import { OeloeserverStateService } from 'src/app/shared/services/oeloeserver-state.service';
import { ServerStatusService } from 'src/app/shared/services/server-status.service';

@Component({
  selector: 'app-server-card',
  templateUrl: './server-card.component.html',
  styleUrls: ['./server-card.component.scss'],
  animations: [fadeInAnimation],
})
export class ServerCardComponent implements OnInit {
  public serverStatus?: ServerStatus;
  constructor(
    private serverStatusService: ServerStatusService,
    private oeloeserverStateService: OeloeserverStateService
  ) {
    this.oeloeserverStateService
      .getMessages()
      .subscribe((_message) => this.queryData());
  }

  ngOnInit(): void {
    this.queryData();
  }

  async queryData() {
    try {
      this.serverStatus = await this.serverStatusService.getServerStatus();
    } catch (e) {
      console.log('Error', e);
    }
  }
}
