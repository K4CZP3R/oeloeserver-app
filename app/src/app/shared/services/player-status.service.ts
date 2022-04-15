import { Injectable } from '@angular/core';
import { extractError } from 'src/app/http/helpers/extract-error.helper';
import { checkApiResult } from '../helpers/check-api-result.helper';
import { PlayerState } from '../models/player-state.interface';
import { SharedModule } from '../shared.module';
import { RestPlayerStatusService } from './rest/rest-player-status.service';

@Injectable({
  providedIn: SharedModule,
})
export class PlayerStatusService {
  constructor(private restPlayerStatusService: RestPlayerStatusService) {}

  async getStatusOfPlayers(): Promise<PlayerState[]> {
    return this.restPlayerStatusService
      .getStatusOfPlayers()
      .then((resp) => {
        return checkApiResult<PlayerState[]>(resp);
      })
      .catch((e) => {
        throw extractError(e);
      });
  }
}
