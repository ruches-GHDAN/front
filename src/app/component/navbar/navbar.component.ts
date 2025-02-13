import { Component, OnInit } from '@angular/core';
import {NavigationEnd,Router, RouterOutlet } from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {MatDrawer, MatDrawerContainer} from '@angular/material/sidenav';
import { AuthenticationService } from '../../services/authentication.service'

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [
    MatIcon,
    MatButton,
    RouterOutlet,
    MatDrawerContainer,
    MatDrawer
  ],
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {}

  navigateToDashboard() {
    console.log('Dashboard...');
  }

  public isActiveRouteAuthentication(): boolean {
    return this.router.url === '/login' || this.router.url === '/register';
  }

  logout() {
    this.authenticationService.logout()
  }
}
