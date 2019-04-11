import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './login/login.component';
import { ADDposComponent } from './addpos/addpos.component';
import { LISTposComponent } from './listpos/listpos.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { POSSalesComponent } from './possales/possales.component';

const routes: Routes = [
  {path: '', redirectTo : 'login', pathMatch: 'full' },
  {path: 'home' , component : HomeComponent},
  { path: 'register' , component : RegisterComponent},
  {path: 'login' , component : LogInComponent},
  {path: 'addPos' , component : ADDposComponent},
  {path: 'listPos' , component :LISTposComponent},
  {path: 'logout' , component : LogoutComponent},
  {path: 'dashboard' , component : DashboardComponent },
{path: 'posSales' , component : POSSalesComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
