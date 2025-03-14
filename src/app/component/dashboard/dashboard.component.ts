import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MapComponent } from '../map/map.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from '../../services/authentication.service';
import { ApiaryService } from '../../services/apiary.service';
import {DashboardService} from "../../services/dashboard.service";
import {forkJoin} from "rxjs";
import { SnackBarService } from '../../services/SnackBar-service'
import { DatePipe } from '@angular/common'
import { MatIcon } from '@angular/material/icon'
import { ApiariesHistory } from '../../models/Apiaries.model'

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
    TranslatePipe,
    DatePipe,
    MatIcon,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  isLoading: boolean = false
  dashboardData: any = []
  mapData: { latitude: number, longitude: number }[] = []
  public apiariesHistory: ApiariesHistory[] = []

  constructor(private authService: AuthenticationService,
              private apiaryService: ApiaryService,
              private dashboardService: DashboardService,
              private snackBarService: SnackBarService,
              private translateService: TranslateService) {
  }

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser()
    if (this.authService.isAuthenticated() && currentUser) {
      this.isLoading = true
      forkJoin([
        this.apiaryService.getUserApiariesLocations(currentUser.id),
          this.dashboardService.getData(currentUser.id)
      ]).subscribe({
        next: response => {
          this.mapData = response[0].locations
          this.dashboardData = Object.entries(response[1]).map(([key, value]) => ({
            key: key,
            value: value
          }))
          this.isLoading = false
        },
        error: error => {
          this.isLoading = false
          this.snackBarService.openErrorSnackBar(this.translateService.instant('snackBar.error.dashboardFetching'))
          console.error('Error fetching data:', error)
        }
      })
    }
    this.getUserHistory()
  }

  public getUserHistory() {
    this.dashboardService.getUserHistory().subscribe({
      next: (response: ApiariesHistory[]) => {
        this.apiariesHistory = response
        this.apiariesHistory.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      },
      error: error => {
        this.snackBarService.openErrorSnackBar(this.translateService.instant('snackBar.error.dashboardFetching'))
        console.error('Error fetching data:', error)
      }
    })
  }
}
