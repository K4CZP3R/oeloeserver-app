import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { ServerStatus } from 'src/app/shared/models/server-status.interface';
import { OeloeserverService } from 'src/app/shared/services/oeloeserver.service';

@Component({
  selector: 'app-server-card',
  templateUrl: './server-card.component.html',
  styleUrls: ['./server-card.component.scss'],
})
export class ServerCardComponent implements OnInit {
  public serverStatus?: ServerStatus;
  constructor(private oeloeserver: OeloeserverService) {
    this.oeloeserver.getWsMessages().subscribe((s) => this.queryData());
  }

  ngOnInit(): void {
    this.queryData();
  }

  queryData() {
    this.oeloeserver
      .getServerStatus()
      .then((ss) => (this.serverStatus = ss.data));
  }
}
