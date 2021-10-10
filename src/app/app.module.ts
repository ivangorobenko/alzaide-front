import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TableauDeBordComponentAccompagnant} from './tableau-de-bord-accompagnant/tableau-de-bord-component-accompagnant.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatSidenavModule} from "@angular/material/sidenav";
import {InformationsAccompagneComponent} from './informations-accompagne/informations-accompagne.component';
import {MatCardModule} from "@angular/material/card";
import {reducers} from "./app.reducer";
import {StoreModule} from "@ngrx/store";
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {HeaderComponent} from "./navigation/header/header.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MessagesComponent} from './messages/messages.component';
import {LaisserMessageComponent} from "./laisser-message/laisser-message.component";

registerLocaleData(localeFr, 'fr');

@NgModule({
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: TableauDeBordComponentAccompagnant},
      {path: 'message', component: TableauDeBordComponentAccompagnant},
      {path: 'informations', component: InformationsAccompagneComponent}
    ]),
    MatSidenavModule,
    MatCardModule,
    StoreModule.forRoot(reducers),
    MatToolbarModule,
    MatIconModule,
  ],
  declarations: [
    AppComponent,
    TableauDeBordComponentAccompagnant,
    InformationsAccompagneComponent,
    HeaderComponent,
    MessagesComponent,
    LaisserMessageComponent

  ],
  providers: [{provide: LOCALE_ID, useValue: "fr-FR"}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
