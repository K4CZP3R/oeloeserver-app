import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'any',
})
export class WebsocketService {
  public mySocket?: WebSocketSubject<any>;
  public myObs?: Observable<any>;
  constructor() {}
  connect(url: string) {
    this.mySocket = webSocket(url);
    this.myObs = this.mySocket.asObservable();
  }
}
