import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MapComponent } from '../map/map.component';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthenticationService } from '../../services/authentication.service';
import { ApiaryService } from '../../services/apiary.service';
import {DashboardService} from "../../services/dashboard.service";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatGridList,
    MatGridTile,
    MapComponent,
    TranslatePipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  isLoading: boolean = false;
  dashboardData: any = []
  mapData: { latitude: number, longitude: number }[] = [];

  constructor(private authService: AuthenticationService,
              private apiaryService: ApiaryService,
              private dashboardService: DashboardService) {
  }

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser()
    if (this.authService.isAuthenticated() && currentUser) {
      this.isLoading = true
      forkJoin([
        this.apiaryService.getUserApiariesLocations(currentUser.id),
          this.dashboardService.getData(currentUser.id)
      ]).subscribe(
        response => {
          this.mapData = response[0].locations
          this.dashboardData = Object.entries(response[1]).map(([key, value]) => ({
            key: key,
            value: value
          }));
          this.isLoading = false
        }
      )
    }
  }
}
