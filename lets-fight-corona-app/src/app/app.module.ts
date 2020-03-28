import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { ContactCollabComponent } from './contact-collab/contact-collab.component';
import { RaiseRequestGroceriesComponent } from './raise-request-groceries/raise-request-groceries.component';
import { RaiseRequestMedicinesComponent } from './raise-request-medicines/raise-request-medicines.component';
import { RaiseRequestFeelingSickComponent } from './raise-request-feeling-sick/raise-request-feeling-sick.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CreateRequestComponent,
    ContactCollabComponent,
    RaiseRequestGroceriesComponent,
    RaiseRequestMedicinesComponent,
    RaiseRequestFeelingSickComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
