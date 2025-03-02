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
  public apiaryHistory: ApiaryHistory[]

  public constructor(private route: ActivatedRoute,
                     private apiaryService: ApiaryService,
                     private snackBarService: SnackBarService,
                     private translateService: TranslateService) {
    this.apiaryId = this.route.snapshot.paramMap.get('id')!;

    this.apiaryHistory = [
      {
        date: '2021-09-02',
        title: 'Création du rucher',
        description: 'Le rucher a été créé avec 10 ruches',
        idApiary: parseInt(this.apiaryId)
      },
      {
        date: '2021-09-10',
        title: 'Ajout de ruches',
        description: 'Ajout de 5 nouvelles ruches',
        idApiary: parseInt(this.apiaryId)
      },
      {
        date: '2021-09-20',
        title: 'Inspection',
        description: 'Inspection du rucher, tout est en ordre',
        idApiary: parseInt(this.apiaryId)
      }
    ];
  }

  public ngOnInit() {
    this.getApiaryById()
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
}
