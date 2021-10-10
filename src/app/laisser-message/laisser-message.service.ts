import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LaisserMessageService {

  constructor(private http: HttpClient,
  ) {
  }

  laisser(message: String, errorCallback: any) {
    this.http.put('http://localhost:8082/message', {message}).subscribe(
      {
        error(msg) {
          errorCallback();
        }
      }
    )
  }
}
