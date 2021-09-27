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

  sendMessage(message: String, errorCallback:any) {
    this.http.put('http://localhost:8082/message', {...message}).subscribe(
      {
        error(msg) {
          errorCallback();
        }
      }
    )
  }

  getAllMessages(successCallback : any, errorCallback : any){
    this.http.get('http://localhost:8082/messages').subscribe(
      {
        next(messages){
         successCallback(messages)
        },
        error(msg) {
          errorCallback();
        }
      }
    )
  }

}
