import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-laisser-message',
  templateUrl: './laisser-message.component.html',
  styleUrls: ['./laisser-message.component.css']
})
export class LaisserMessageComponent implements OnInit {

  messageForm = this.formBuilder.group({
    message: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,

  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const status = this.messageService.sendMessage(this.messageForm.value);
  }

}
