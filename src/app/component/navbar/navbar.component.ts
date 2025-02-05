import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [
    MatIcon,
    MatButton
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
