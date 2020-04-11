import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import { HomeComponent } from '../home/home.component';
import { ContactCollabComponent } from '../contact-collab/contact-collab.component';
import { CreateRequestComponent } from '../create-request/create-request.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RaiseRequestGroceriesComponent } from '../raise-request-groceries/raise-request-groceries.component';
import { RaiseRequestMedicinesComponent } from '../raise-request-medicines/raise-request-medicines.component';
import { RaiseRequestFeelingSickComponent } from '../raise-request-feeling-sick/raise-request-feeling-sick.component';
import { RequestDashboardComponent } from '../request-dashboard/request-dashboard.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'contact-collabrate',
    component: ContactCollabComponent
  },
  {
    path: 'raise-request',
    component: CreateRequestComponent
  },
  {
    path: 'raise-request-groceries',
    component: RaiseRequestGroceriesComponent
  },
  {
    path: 'raise-request-medicine',
    component: RaiseRequestMedicinesComponent
  },
  {
    path: 'raise-request-feeling-sick',
    component: RaiseRequestFeelingSickComponent
  },
  {
    path: 'request-dashboard',
    component: RequestDashboardComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
