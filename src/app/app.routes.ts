import { Routes } from '@angular/router'
import { LoginComponent } from './component/login/login.component'
import { RegisterComponent } from './component/register/register.component'
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HivesComponent } from './component/hives/hives.component'
import { LandingComponent } from './component/landing/landing.component'

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'hives', component: HivesComponent },
  { path: 'landing', component: LandingComponent },

  // Authenticated routes
  // TODO : Ajouter AuthGuard pour que la route soit accessible uniquement si l'utilisateur est connecté
  { path: 'dashboard', component: DashboardComponent }
];
