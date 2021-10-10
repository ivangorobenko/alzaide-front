import {Component, Input, OnInit} from '@angular/core';
import {Message} from "./message.model";
import {Store} from "@ngrx/store";
import {getMessages, State} from "../app.reducer";
import {MessagesService} from "./messages.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Message[] = [];

  @Input() canDeleteMessage:boolean = false;

  constructor(private store: Store<State>, private messagesService: MessagesService) {
  }

  ngOnInit(): void {
    this.messagesService.getAllMessages()
    this.store.select(getMessages).subscribe((messages) => {
      this.messages = messages
    });
  }

  onDelete(id: string) {
    this.messagesService.deleteMessage(id);
  }
}
