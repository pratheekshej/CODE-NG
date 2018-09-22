import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    FormsModule,
    InputTextModule
  ],
  declarations: [
    HeaderComponent,
    DataTableComponent
  ],
  exports: [
    HeaderComponent,
    DataTableComponent
  ]
})
export class SharedModule { }
