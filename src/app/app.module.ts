import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LaisserMessageComponent} from './laisser-message/laisser-message.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: 'message', component: LaisserMessageComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
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
