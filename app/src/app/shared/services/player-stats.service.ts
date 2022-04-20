import { Injectable } from '@angular/core';
import { extractError } from 'src/app/http/helpers/extract-error.helper';
import { checkApiResult } from '../helpers/check-api-result.helper';
import { PlayerStats } from '../models/player-stats.interface';
import { SharedModule } from '../shared.module';
import { RestPlayerStatsService } from './rest/rest-player-stats.service';

@Injectable({
  providedIn: SharedModule,
})
export class PlayerStatsService {
  constructor(private restPlayerStatsService: RestPlayerStatsService) {}

  async getStatsOfPlayer(playerId: string): Promise<PlayerStats> {
    return this.restPlayerStatsService
      .getStatsOfPlayerId(playerId)
      .then((resp) => {
        return checkApiResult<PlayerStats>(resp);
      })
      .catch((e) => {
        throw extractError(e);
      });
  }
}
