import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './featured/welcome/welcome.component';
import {HomeComponent} from './featured/home/home.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'welcome',
    pathMatch : 'full',
  },
  {
    path : 'welcome',
    component : WelcomeComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : '**',
    redirectTo : 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
