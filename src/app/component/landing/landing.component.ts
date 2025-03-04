import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    TranslatePipe,
    RouterLink
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {}
