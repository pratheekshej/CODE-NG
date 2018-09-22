import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    DataTableComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
