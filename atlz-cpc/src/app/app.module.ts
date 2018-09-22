import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './partials/welcome/welcome.component';
import { ErrStackComponent } from './partials/err-stack/err-stack.component';
import { MainLayoutComponent } from './containers';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { DataErrService } from './services/data-err/data-err.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrNavComponent } from './components/err-nav/err-nav.component';
import { FormsModule } from '@angular/forms';
import { ErrDetailComponent } from './partials/err-detail/err-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {
  ModalModule,
  PaginationModule
} from 'ngx-bootstrap';
import { ErrGridComponent } from './partials/err-grid/err-grid.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UnderscoreEliminatorPipe } from './pipes/underscore-eliminator/underscore-eliminator.pipe';
import { LoginComponent } from './partials/login/login.component';
import { FormElementsComponent } from './components/for-error-grid/form-elements/form-elements.component';
import { DataTableComponent } from './components/for-error-grid/data-table/data-table.component';
import { ModalComponent } from './components/modal/modal.component';
import { StoreModule } from '@ngrx/store';
/*import {NgSlimScrollModule, SLIMSCROLL_DEFAULTS} from 'ngx-slimscroll';*/

/*
* APP_COMPONENTS
* */
const APP_COMPONENTS = [
  MainLayoutComponent,
  AppHeaderComponent,
  ErrNavComponent,
  FormElementsComponent,
  DataTableComponent,
  ModalComponent
];

/*
* APP_PARTIALS
* */
const APP_MAIN_PARTILAS = [
  WelcomeComponent,
  ErrStackComponent,
  ErrDetailComponent,
  ErrGridComponent,
  LoginComponent
];

/*
* PIPES
* */
const APP_PIPES = [
  UnderscoreEliminatorPipe
];

@NgModule({
  imports      : [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    PaginationModule.forRoot(),
    NgxSpinnerModule,
    ModalModule.forRoot(),
    StoreModule
  ],
  declarations : [
    AppComponent,
    ...APP_COMPONENTS,
    ...APP_MAIN_PARTILAS,
    ...APP_PIPES
  ],
  providers    : [
    DataErrService
  ],
  bootstrap    : [AppComponent]
})
export class AppModule {}
