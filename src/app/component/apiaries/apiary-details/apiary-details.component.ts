import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { Apiary, ApiaryHistory } from '../../../models/Apiaries.model';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { ApiaryService } from '../../../services/apiary.service'
import { SnackBarService } from '../../../services/SnackBar-service'
import { ApiaryDetails } from '../../../models/Apiary.model'

@Component({
  selector: 'app-apiary-details',
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
  templateUrl: './apiary-details.component.html',
  styleUrl: './apiary-details.component.scss'
})
export class ApiaryDetailsComponent implements OnInit {
  public apiaryId: string
  public apiary: ApiaryDetails | undefined
  public apiaryHistory: ApiaryHistory[] | undefined

  public constructor(private route: ActivatedRoute,
                     private apiaryService: ApiaryService,
                     private snackBarService: SnackBarService,
                     private translateService: TranslateService) {
    this.apiaryId = this.route.snapshot.paramMap.get('id')!
  }

  public ngOnInit() {
    this.getApiaryById()
    this.getApiaryHistory()
  }

  public getApiaryById() {
    this.apiaryService.getApiaryById(this.apiaryId).subscribe({
      next: (apiary: ApiaryDetails) => {
        this.apiary = apiary
      },
      error: (error) => {
        console.error('Error fetching apiary', error)
      }
    })
  }

  public getApiaryHistory() {
    this.apiaryService.getApiaryHistory(this.apiaryId).subscribe({
      next: (apiaryHistory: ApiaryHistory[]) => {
        this.apiaryHistory = apiaryHistory
      },
      error: (error) => {
        if (error.status === 404) {
          this.snackBarService.openInfoSnackBar(this.translateService.instant('snackBar.error.noApiaryHistory'))
          return
        }
        this.snackBarService.openErrorSnackBar(this.translateService.instant('snackBar.error.getApiaryHistory'))
        console.error('Error fetching apiary history', error)
      }
    })
  }
}
