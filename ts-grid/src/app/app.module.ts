import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NGridComponent } from './featured/n-grid/n-grid.component';
import { RGridComponent } from './featured/r-grid/r-grid.component';
import { SharedModule } from './shared/shared.module';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    NGridComponent,
    RGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
