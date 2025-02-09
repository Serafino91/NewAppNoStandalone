import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { ButtonScComponent } from "../components/button-sc/button-sc.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonScComponent,
    ButtonScComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
