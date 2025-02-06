import { Routes } from '@angular/router'
import { LoginComponent } from './component/login/login.component'
import { RegisterComponent } from './component/register/register.component'
import {HivesComponent} from './component/hives/hives.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'hives', component: HivesComponent }
];
