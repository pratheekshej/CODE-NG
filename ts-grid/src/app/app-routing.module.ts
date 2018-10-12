import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NGridComponent } from './featured/n-grid/n-grid.component';
import { RGridComponent } from './featured/r-grid/r-grid.component';
import { DGridComponent } from './featured/d-grid/d-grid.component';
import { RecordRTCComponent } from './featured/record-rtc/record-rtc.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'n-grid',
    pathMatch: 'full'
  },
  {
    path: 'n-grid',
    component: NGridComponent,
    data: {
      component : 'n-grid'
    }
  },
  {
    path: 'r-grid',
    component: RGridComponent,
    data: {
      component : 'r-grid'
    }
  },
  {
    path: 'd-grid',
    component: DGridComponent,
    data: {
      component : 'd-grid'
    }
  },
  {
    path: 'record',
    component: RecordRTCComponent,
    data: {
      component : 'record-rtc'
    }
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
