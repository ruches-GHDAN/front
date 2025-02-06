import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {MatDrawer, MatDrawerContainer} from '@angular/material/sidenav';

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
  constructor(private router: Router) {}

  navigateToDashboard() {
    //this.router.navigate(['/dashboard']);
    console.log('Dashboard...');
  }

  logout() {
    console.log('Déconnexion...');
  }
}
