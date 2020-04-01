import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigReaderServiceService } from './config-reader-service.service';

@Injectable({
  providedIn: 'root'
})
export class urlConfig {
  apiUrl: string;
}
export class ILeapApiService {
  private headers: HttpHeaders;
  private urlObject: urlConfig;
  private accessPointUrl: string = ''; //'http://localhost:62264/api';

  constructor(private http: HttpClient, appConfig: ConfigReaderServiceService) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    // this.urlObject = appConfig.config.url;
    this.accessPointUrl = appConfig.config.apiUrl;
    console.log('iLeap Service URL', this.accessPointUrl);
    // console.log('iLeap Service URL from object ', this.accessPointUrl);
    
  }

  public get() {
    // Get all jogging data
    let result = this.http.get(this.accessPointUrl + '/values');
    return result;
  }

  public getPriorities() {
    // Get all jogging data
    let result = this.http.get(this.accessPointUrl + '/Priorities');
    return result;
  }

  public getWorkStatus() {
    // Get all jogging data
    let result = this.http.get(this.accessPointUrl + '/Status');
    return result;
  }

  public getTotalWorkOrders() {
    // Get all jogging data
    let result = this.http.get(this.accessPointUrl + '/TotalWO');
    return result;
  }
}
