import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NGridComponent } from './featured/n-grid/n-grid.component';
import { RGridComponent } from './featured/r-grid/r-grid.component';
import { SharedModule } from './shared/shared.module';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DGridComponent } from './featured/d-grid/d-grid.component';
import { CommonService } from './services/common/common.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NGridComponent,
    RGridComponent,
    DGridComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TableModule,
    InputTextModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
