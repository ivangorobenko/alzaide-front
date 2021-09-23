import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private http: HttpClient
  ) {
  }


  sendMessage(message: String) {
    this.http.put<any>('http://localhost:8082/message', {message}).subscribe((error: HttpErrorResponse) => {
      console.log(error)
    })
    this.http.get("http://localhost:8082/messages").subscribe((response) => console.log(response));
  }

}
