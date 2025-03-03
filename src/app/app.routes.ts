import { Routes } from '@angular/router'
import { LoginComponent } from './component/login/login.component'
import { RegisterComponent } from './component/register/register.component'
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HivesComponent } from './component/hives/hives.component'
import { LandingComponent } from './component/landing/landing.component'
import { ApiariesComponent } from './component/apiaries/apiaries.component';
import { HiveDetailsComponent } from './component/hives/hive-details/hive-details.component'
import { ErrorPageComponent } from './component/error-page/error-page.component'
import {ApiaryDetailsComponent} from './component/apiaries/apiary-details/apiary-details.component';
import { AuthGuard } from './services/auth.guard'

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'hives', component: HivesComponent, canActivate: [AuthGuard] },
  { path: 'apiaries', component: ApiariesComponent, canActivate: [AuthGuard] },
  { path: 'apiary/:id', component: ApiaryDetailsComponent, canActivate: [AuthGuard] },
  { path: 'hive/:id', component: HiveDetailsComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'error/:errorKey', component: ErrorPageComponent },
  { path: '**', redirectTo: 'error/404', pathMatch: 'full' }
];
