import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'any',
})
export class OeloeserverWsService {
  public messages: Observable<any>;
  private WS_URL = 'ws://localhost:8080';
  constructor(websocketService: WebsocketService) {
    websocketService.connect(this.WS_URL);
    this.messages = websocketService.myObs!;
  }
}
