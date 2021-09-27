import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LaisserMessageComponent} from './laisser-message/laisser-message.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";


@NgModule({
    imports: [
      MatFormFieldModule,
      MatButtonModule,
      MatInputModule,
      MatSnackBarModule,
        BrowserModule,
        BrowserAnimationsModule,
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
