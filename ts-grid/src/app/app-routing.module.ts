import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NGridComponent } from './featured/n-grid/n-grid.component';
import { RGridComponent } from './featured/r-grid/r-grid.component';
import { DGridComponent } from './featured/d-grid/d-grid.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'n-grid',
    pathMatch: 'full'
  },
  {
    path: 'n-grid',
    component: NGridComponent
  },
  {
    path: 'r-grid',
    component: RGridComponent
  },
  {
    path: 'd-grid',
    component: DGridComponent
  },
  {
    path: '**',
    redirectTo: 'n-grid'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
