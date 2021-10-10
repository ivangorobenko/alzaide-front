import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  time = Date.now();

  constructor() {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.time = Date.now();
    }, 1000)
  }

}
