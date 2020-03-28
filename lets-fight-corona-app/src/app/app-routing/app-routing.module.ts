import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import { HomeComponent } from '../home/home.component';
import { ContactCollabComponent } from '../contact-collab/contact-collab.component';
import { CreateRequestComponent } from '../create-request/create-request.component';


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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
