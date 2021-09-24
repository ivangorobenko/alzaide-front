import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private http: HttpClient
  ) {
  }


  sendMessage(message: String) {
    this.http.put<any>('http://localhost:8082/message', {message}).subscribe((response) => ({status: response.status}),
      (error: HttpErrorResponse) => ({status: error.status}))
  }

}
