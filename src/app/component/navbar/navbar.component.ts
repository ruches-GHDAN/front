import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {MatDrawer, MatDrawerContainer} from '@angular/material/sidenav';
import { AuthenticationService } from '../../services/authentication.service'
import { SnackBarService } from '../../services/SnackBar-service'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [
    MatIcon,
    MatButton,
    RouterOutlet,
    MatDrawerContainer,
    MatDrawer,
    RouterLink,
    RouterLinkActive
  ],
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router,
              public authenticationService: AuthenticationService,
              private readonly snackBarService: SnackBarService,
              private readonly translateService: TranslateService) {}

  public isActiveRouteAuthentication(): boolean {
    return this.router.url === '/login' || this.router.url === '/register'
  }

  public isActiveRouteHives(): boolean {
    return this.router.url === '/hives'
  }

  public isActiveRouteLanding(): boolean {
    return this.router.url === '/landing'
  }

  public isActiveRouteApiaries(): boolean {
    return this.router.url === '/apiaries'
  }

  logout() {
    this.authenticationService.logout()
    this.snackBarService.openInfoSnackBar(this.translateService.instant('snackBar.success.logout'))
  }
}
