import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {LaisserMessageService} from "./laisser-message.service";

@Component({
  selector: 'app-laisser-message',
  templateUrl: './laisser-message.component.html',
  styleUrls: ['./laisser-message.component.css']
})
export class LaisserMessageComponent implements OnInit {

  messages = [{contenu: "", timestamp: undefined}]

  constructor(
    private formBuilder: FormBuilder,
    private laisserMessage: LaisserMessageService,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(f: any): void {
    this.laisserMessage.laisser(f.value.message, () => this.openSnackBar("Impossible d'envoyer un message", "Fermer"));
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

}
