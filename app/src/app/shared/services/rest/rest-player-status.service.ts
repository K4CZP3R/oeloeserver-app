import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/http/services/http-request.service';
import { environment } from 'src/environments/environment';
import { IResult } from '../../models/result.interface';
import { PlayerState } from '../../models/player-state.interface';
import { SharedModule } from '../../shared.module';
import { PlayerName } from '../../models/player-name.interface';

@Injectable({
  providedIn: SharedModule,
})
export class RestPlayerStatusService {
  private API_URL = environment.oeloeserver_rest;
  constructor(private httpRequestService: HttpRequestService) {}

  async getStatusOfPlayers(): Promise<IResult<PlayerState[]>> {
    return this.httpRequestService.get<IResult<PlayerState[]>>(
      `${this.API_URL}/player/status`
    );
  }

  async getStatusOfPlayerById(playerId: string): Promise<IResult<PlayerState>> {
    return this.httpRequestService.get<IResult<PlayerState>>(
      `${this.API_URL}/player/status/id/${playerId}`
    );
  }

  async getPlayerNames(): Promise<IResult<PlayerName[]>> {
    return this.httpRequestService.get<IResult<PlayerName[]>>(
      `${this.API_URL}/player/status/names`
    );
  }
}
