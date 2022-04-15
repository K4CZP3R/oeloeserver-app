import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, lastValueFrom } from 'rxjs';
import { HttpModule } from '../http.module';

@Injectable({
  providedIn: HttpModule,
})
export class HttpRequestService {
  constructor(private http: HttpClient) {}

  get<T>(url: string, headers?: any): Promise<T> {
    return lastValueFrom(
      this.http.get<T>(url, { headers: headers }).pipe(first())
    );
  }

  post<T>(url: string, data: any, headers?: any): Promise<T> {
    return lastValueFrom(
      this.http.post<T>(url, data, { headers: headers }).pipe(first())
    );
  }
}
