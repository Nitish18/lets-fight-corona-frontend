import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendDataBackendService {

  postRequestApiUrl = 'http://127.0.0.1:9002/peopleRequest/';
  getRequestApiUrl = 'http://127.0.0.1:9002/peopleRequest/';
  getDashboardDataApiUrl = 'http://127.0.0.1:9002/dashboard/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }
  sendDataToBackend(data) {
    return this.http.post(this.postRequestApiUrl, data, this.httpOptions)
  }

  getDataFromBackend() {
    return this.http.get(this.postRequestApiUrl)
  }

  getDashboardDataFromBackend(group_by_field) {
    let params = new HttpParams();
    params = params.append('group_by_field', group_by_field);
    return this.http.get(this.getDashboardDataApiUrl, {params: params})
  }

}
