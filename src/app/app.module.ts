import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LaisserMessageComponent} from './laisser-message/laisser-message.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: LaisserMessageComponent},
      {path: 'message', component: LaisserMessageComponent},
    ]),
  ],
  declarations: [
    AppComponent,
    LaisserMessageComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
