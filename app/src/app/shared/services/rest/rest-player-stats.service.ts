import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/http/services/http-request.service';
import { environment } from 'src/environments/environment';
import { PlayerStats } from '../../models/player-stats.interface';
import { IResult } from '../../models/result.interface';
import { SharedModule } from '../../shared.module';

@Injectable({
  providedIn: SharedModule,
})
export class RestPlayerStatsService {
  private API_URL = environment.oeloeserver_rest;
  constructor(private httpRequestService: HttpRequestService) {}

  async getStatsOfPlayerId(playerId: string): Promise<IResult<PlayerStats>> {
    return this.httpRequestService.get<IResult<PlayerStats>>(
      `${this.API_URL}/player/stats/${playerId}`
    );
  }
}
