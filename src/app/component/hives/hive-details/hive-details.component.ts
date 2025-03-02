import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router'
import { MatButton } from '@angular/material/button'
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card'
import { Hive, HiveHistory } from '../../../models/Hives.model'
import { TranslatePipe } from '@ngx-translate/core'
import { DatePipe } from '@angular/common'
import { MatIcon } from '@angular/material/icon'
import { MatTooltip } from '@angular/material/tooltip'

@Component({
  selector: 'app-hive-details',
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    TranslatePipe,
    DatePipe,
    MatIcon,
    RouterLink,
    MatTooltip,


  ],
  templateUrl: './hive-details.component.html',
  styleUrl: './hive-details.component.scss'
})
export class HiveDetailsComponent {
  public hiveId: string
  public hive: Hive
  public hiveHistory: HiveHistory[]

  public constructor(private route: ActivatedRoute) {
    this.hiveId = this.route.snapshot.paramMap.get('id')!
    this.hive = {
      id: parseInt(this.hiveId),
      registration: 23485,
      status: 'Active',
      size: 10,
      race: 'Italian',
      temperature: 35,
      queenYear: 2019,
      longitude: 45.5,
      latitude: 45.5
    }

    this.hiveHistory = [
      {
        date: '2021-09-02',
        title: 'Hive creation',
        description: 'Hive created with 10 bees',
        idRuche: parseInt(this.hiveId)
      },
      {
        date: '2021-09-03',
        title: 'Hive update',
        description: 'Hive updated with 5 bees',
        idRuche: parseInt(this.hiveId)
      },
      {
        date: '2021-09-04',
        title: 'Hive update',
        description: 'Hive updated with 15 bees',
        idRuche: parseInt(this.hiveId)
      }
    ]
  }
}
