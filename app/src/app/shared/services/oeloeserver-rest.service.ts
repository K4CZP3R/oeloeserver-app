import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/api-response.interface';
import { PlayerState } from '../models/player-state.interface';
import { ServerStatus } from '../models/server-status.interface';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'any',
})
export class OeloeserverRestService {
  private API_URL = 'http://localhost:1337';
  constructor(private httpRequest: HttpRequestService) {}

  getAllPlayerStatus(): Promise<ApiResponse<PlayerState[]>> {
    return this.httpRequest.get<ApiResponse<PlayerState[]>>(
      `${this.API_URL}/player/status`
    );
  }

  getServerStatus(
    server: string,
    port: number
  ): Promise<ApiResponse<ServerStatus>> {
    return this.httpRequest.get(
      `${this.API_URL}/server/status/${server}/${port}`
    );
  }
}
