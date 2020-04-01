import { Injectable } from '@angular/core';

import { HttpClient, HttpBackend, HttpResponse } from '@angular/common/http';
// import { Observable } from '../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { Config } from '../shared/models/Config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigReaderServiceService {
  public config;

  constructor(private http: HttpClient) {}

  loadConfig() {
    return this.http
      .get('./assets/config.json')
      .toPromise()
      .then(data => {
        this.config = data;
      });
  }

  // getServerUrl(): string {
  //   return this.appConfig.API_URL;
  // }

}
