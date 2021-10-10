import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../messages/message.model";

@Component({
  selector: 'app-tableau-de-bord-accompagnant',
  templateUrl: './tableau-de-bord-component-accompagnant.component.html',
  styleUrls: ['./tableau-de-bord-component-accompagnant.component.css']
})
export class TableauDeBordComponentAccompagnant implements OnInit {

  messages: Message[] = [];


  constructor(
  ) {
  }

  ngOnInit(): void {
  }


}
