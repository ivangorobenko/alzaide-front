import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MessageService} from "../message.service";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-laisser-message',
  templateUrl: './laisser-message.component.html',
  styleUrls: ['./laisser-message.component.css']
})
export class LaisserMessageComponent implements OnInit {

  messageForm = this.formBuilder.group({
    message: '',
  });

  messages = [{contenu:"bla",timestamp:123}]
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    setInterval(()=>{this.messageService.getAllMessages((messages:any) => {
      this.messages = messages;
      console.log(this.messages)
    },()=>undefined)},1000)
  }

  onSubmit(): void {
    this.messageService.sendMessage(this.messageForm.value, () => this.openSnackBar("Impossible d'envoyer un message","Fermer"));
    this.messageForm.reset();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

}
