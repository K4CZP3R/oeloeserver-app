import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebsocketService } from 'src/app/http/services/websocket.service';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../../shared.module';

@Injectable({
  providedIn: SharedModule,
})
export class WsOeloeserverService {
  private WS_URL = environment.oeloeserver_ws;
  public messages: Observable<any>;
  constructor(websocketService: WebsocketService) {
    websocketService.connect(this.WS_URL);
    this.messages = websocketService.myObs!;
  }
}
