import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendDataBackendService {

  postRequestApiUrl = 'http://127.0.0.1:9002/peopleRequest/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }
  sendDataToBackend(data) {
    return this.http.post(this.postRequestApiUrl, data, this.httpOptions)
  }

}
