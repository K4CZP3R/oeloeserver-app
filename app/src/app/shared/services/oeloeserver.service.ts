import { Injectable } from '@angular/core';
import { OeloeserverRestService } from './oeloeserver-rest.service';
import { OeloeserverWsService } from './oeloeserver-ws.service';

@Injectable({
  providedIn: 'any',
})
export class OeloeserverService {
  constructor(
    private oeloeserverRest: OeloeserverRestService,
    public oeloeserverWs: OeloeserverWsService
  ) {}

  getAllPlayerStatus() {
    return this.oeloeserverRest.getAllPlayerStatus();
  }
  getServerStatus() {
    return this.oeloeserverRest.getServerStatus('', 0);
  }

  getWsMessages() {
    return this.oeloeserverWs.messages;
  }
}
