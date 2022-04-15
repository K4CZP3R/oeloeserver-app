import { Injectable } from '@angular/core';
import { extractError } from 'src/app/http/helpers/extract-error.helper';
import { checkApiResult } from '../helpers/check-api-result.helper';
import { SharedModule } from '../shared.module';
import { RestPlayerStatsService } from './rest/rest-player-stats.service';

@Injectable({
  providedIn: SharedModule,
})
export class PlayerStatsService {
  constructor(private restPlayerStatsService: RestPlayerStatsService) {}

  async getStatsOfPlayer(playerId: string): Promise<any> {
    return this.restPlayerStatsService
      .getStatsOfPlayerId(playerId)
      .then((resp) => {
        return checkApiResult<any>(resp);
      })
      .catch((e) => {
        throw extractError(e);
      });
  }
}
