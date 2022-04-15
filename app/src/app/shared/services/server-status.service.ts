import { Injectable } from '@angular/core';
import { extractError } from 'src/app/http/helpers/extract-error.helper';
import { environment } from 'src/environments/environment';
import { checkApiResult } from '../helpers/check-api-result.helper';
import { IResult } from '../models/result.interface';
import { ServerStatus } from '../models/server-status.interface';
import { SharedModule } from '../shared.module';
import { RestServerStatusService } from './rest/rest-server-status.service';

@Injectable({
  providedIn: SharedModule,
})
export class ServerStatusService {
  private SERVER_ADDRESS = environment.mc_server_addr;
  constructor(private restServerStatusService: RestServerStatusService) {}

  async getServerStatus(): Promise<ServerStatus> {
    let splitted = this.SERVER_ADDRESS.split(':');
    return this.restServerStatusService
      .getServerStatus(splitted[0], splitted[1])
      .then((resp) => {
        return checkApiResult<ServerStatus>(resp);
      })
      .catch((e) => {
        throw extractError(e);
      });
  }
}
