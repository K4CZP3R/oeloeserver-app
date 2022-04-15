import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { HttpModule } from '../http.module';

@Injectable({
  providedIn: HttpModule,
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
