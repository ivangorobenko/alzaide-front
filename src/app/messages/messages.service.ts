import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {State} from "../app.reducer";
import {RecupererMessages} from "./messages.actions";
import {Message} from "./message.model";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private http: HttpClient,
    private store: Store<State>) {
  }

  getAllMessages() {
    setInterval(() => this.http.get('http://localhost:8082/messages').subscribe(
      (messages) => {
        this.store.dispatch(new RecupererMessages(messages as Message[]))
      }), 1000)
  }

  deleteMessage(id: string) {
    this.http.delete('http://localhost:8082/messages/' + id).subscribe({
      error(msg) {
        console.log(msg);
      }
    });
  }
}
