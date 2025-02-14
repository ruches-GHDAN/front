import { Routes } from '@angular/router'
import { LoginComponent } from './component/login/login.component'
import { RegisterComponent } from './component/register/register.component'
import { HivesComponent } from './component/hives/hives.component'
import { LandingComponent } from './component/landing/landing.component'
import { ApiariesComponent } from './component/apiaries/apiaries.component';

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'hives', component: HivesComponent },
  { path: 'apiaries', component: ApiariesComponent },
  { path: 'landing', component: LandingComponent }
];
