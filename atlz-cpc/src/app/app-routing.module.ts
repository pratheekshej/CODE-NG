import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './partials/welcome/welcome.component';
import {ErrStackComponent} from './partials/err-stack/err-stack.component';
import {ErrDetailComponent} from './partials/err-detail/err-detail.component';
import {ErrGridComponent} from './partials/err-grid/err-grid.component';
import {LoginComponent} from './partials/login/login.component';

const routes: Routes = [
  {
    path       : '',
    redirectTo : 'login',
    pathMatch  : 'full'
  },
  {
    path      : 'login',
    component : LoginComponent,
    data      : {
      title : 'Login'
    }
  },
  {
    path      : 'welcome',
    component : WelcomeComponent,
    data      : {
      title : 'Welcome'
    }
  },
  {
    path      : 'error-grid',
    component : ErrGridComponent
  },
  {
    path      : 'pop-view',
    component : ErrStackComponent
  },
  {
    path : '**',
    redirectTo: 'welcome'
  }
  /*{
    path      : 'error/:id',
    component : ErrDetailComponent
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
