import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';
import { AuthenticationService } from '../../services/authentication.service'
import { SnackBarService } from '../../services/SnackBar-service'
import { TranslatePipe, TranslateService } from '@ngx-translate/core'

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
    TranslatePipe
  ],
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router,
              public authenticationService: AuthenticationService,
              private readonly snackBarService: SnackBarService,
              private readonly translateService: TranslateService) {}

  public isActiveRouteAuthentication(): boolean {
    return this.router.url === '/login' || this.router.url === '/register' || this.router.url === '/landing'
  }

  public isActiveRouteHives(): boolean {
    return this.router.url === '/hives'
  }

  public isActiveRouteDashboard(): boolean {
    return this.router.url === '/dashboard'
  }

  public isActiveRouteApiaries(): boolean {
    return this.router.url === '/apiaries'
  }

  logout() {
    this.authenticationService.logout()
    this.snackBarService.openInfoSnackBar(this.translateService.instant('snackBar.success.logout'))
  }
}
