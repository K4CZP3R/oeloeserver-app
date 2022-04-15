import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedModule } from '../shared.module';
import { WsOeloeserverService } from './websocket/ws-oeloeserver.service';

@Injectable({
  providedIn: SharedModule,
})
export class OeloeserverStateService {
  constructor(private wsOeloeserverService: WsOeloeserverService) {}

  getMessages(): Observable<any> {
    return this.wsOeloeserverService.messages;
  }
}
