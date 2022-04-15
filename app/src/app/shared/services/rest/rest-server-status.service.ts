import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/http/services/http-request.service';
import { environment } from 'src/environments/environment';
import { IResult } from '../../models/result.interface';
import { ServerStatus } from '../../models/server-status.interface';
import { SharedModule } from '../../shared.module';

@Injectable({
  providedIn: SharedModule,
})
export class RestServerStatusService {
  private API_URL = environment.oeloeserver_rest;
  constructor(private httpRequestService: HttpRequestService) {}

  getServerStatus(
    host: string,
    port: string | number
  ): Promise<IResult<ServerStatus>> {
    return this.httpRequestService.get(
      `${this.API_URL}/server/status/${host}/${port}`
    );
  }
}
