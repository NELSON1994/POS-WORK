import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ADDposComponent } from './addpos/addpos.component';
import { LISTposComponent } from './listpos/listpos.component';
import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PosServiceService } from './service/data/pos-service.service';
import { POSSalesComponent } from './possales/possales.component';
import { DataTablesModule} from 'angular-datatables';
import { StoreModule} from '@ngrx/store';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ADDposComponent,
    LISTposComponent,
    RegisterComponent,
    LogInComponent,
    LogoutComponent,
    PageNotFoundComponent,
    DashboardComponent,
    POSSalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgReduxModule,
    FormsModule,
    StoreModule.forRoot({})
  
  ],
  providers: [PosServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor (ngRedux: NgRedux<IAppState>) {
      ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}