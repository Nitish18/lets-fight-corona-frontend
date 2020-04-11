import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SendDataBackendService } from './send-data-backend.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { ContactCollabComponent } from './contact-collab/contact-collab.component';
import { RaiseRequestGroceriesComponent } from './raise-request-groceries/raise-request-groceries.component';
import { RaiseRequestMedicinesComponent } from './raise-request-medicines/raise-request-medicines.component';
import { RaiseRequestFeelingSickComponent } from './raise-request-feeling-sick/raise-request-feeling-sick.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestDashboardComponent } from './request-dashboard/request-dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    RequestDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [
    SendDataBackendService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
