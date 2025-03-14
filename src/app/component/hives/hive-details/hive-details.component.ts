import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router'
import { MatButton } from '@angular/material/button'
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card'
import { Hive, HiveHistory, HiveResponse } from '../../../models/Hives.model'
import { TranslatePipe, TranslateService } from '@ngx-translate/core'
import { DatePipe } from '@angular/common'
import { MatIcon } from '@angular/material/icon'
import { MatTooltip } from '@angular/material/tooltip'
import { HiveService } from '../../../services/hive.service'
import { SnackBarService } from '../../../services/SnackBar-service'

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
    MatTooltip
  ],
  templateUrl: './hive-details.component.html',
  styleUrl: './hive-details.component.scss'
})
export class HiveDetailsComponent implements OnInit {
  public hiveId: string
  public hive: HiveResponse | undefined
  public hiveHistory: HiveHistory[]

  public constructor(private route: ActivatedRoute,
                     private hiveService: HiveService,
                     private snackBarService: SnackBarService,
                     private translateService: TranslateService) {
    this.hiveId = this.route.snapshot.paramMap.get('id')!

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

  public ngOnInit(): void {
    this.getHiveInfos()
  }

  private getHiveInfos(): void {
    this.hiveService.getHiveById(parseInt(this.hiveId)).subscribe({
      next: (hive: HiveResponse) => {
        this.hive = hive
      },
      error: (error) => {
        console.error(error)
        this.snackBarService.openErrorSnackBar(this.translateService.instant('snackBar.error'))
      }
    })
  }
}
