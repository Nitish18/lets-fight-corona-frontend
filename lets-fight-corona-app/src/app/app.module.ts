import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
