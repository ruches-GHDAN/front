import { Component, inject, PLATFORM_ID } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MapComponent } from '../map/map.component';
import { TranslatePipe } from '@ngx-translate/core';

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
export class DashboardComponent {
  dashboardData = [
    {
      key: 'Rucher(s)',
      value: '3'
    },
    {
      key: 'Ruche(s)',
      value: '12'
    },
    {
      key: 'Alerte(s)',
      value: '2'
    },
    {
      key: 'kg de miel Récolté(s)',
      value: '48'
    }
  ]

  mapData = [
    {
      lat: 46.98878785962237,
      lng: 5.364643002313322
    },
    {
      lat: 46.991311598616214,
      lng: 5.3721625122334284
    },
    {
      lat: 47.00865295058318,
      lng: 5.378989638961729
    },
    {
      lat: 47.003318747577616,
      lng: 5.315922618131288
    }
  ]
}
