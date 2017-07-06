import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgencyComponent } from './agency/agency.component';
import { AgencylistComponent } from './agencylist/agencylist.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: 'Agency',
    component: AgencyComponent
  },
  {
    path: 'AgencyList',
    component: AgencylistComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
