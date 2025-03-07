import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { ApiaryDialogComponent } from './apiary-dialog/apiary-dialog.component'
import { Apiary, ApiaryByUser } from '../../models/Apiary.model'
import { ApiaryService } from '../../services/apiary.service'
import { SnackBarService } from '../../services/SnackBar-service'
import { MatTooltip } from '@angular/material/tooltip'
import { RouterLink } from '@angular/router'
import { MatIcon } from '@angular/material/icon'
import { MatIconButton } from '@angular/material/button'

@Component({
  selector: 'app-apiaries',
  imports: [
    FormsModule,
    TranslatePipe,
    MatTooltip,
    RouterLink,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './apiaries.component.html',
  styleUrl: './apiaries.component.scss'
})
export class ApiariesComponent implements OnInit {
  searchText = ''
  public dialog = inject(MatDialog)
  public apiaries: ApiaryByUser[] = []

  public constructor(private apiaryService: ApiaryService,
                     private snackBarService: SnackBarService,
                     private translateService: TranslateService) {
  }

  public ngOnInit() {
    this.getAllApiaries()
  }

  get filteredApiaries() {
    return this.apiaries.filter(apiary => apiary.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  public getAllApiaries() {
    this.apiaryService.getAllApiaries().subscribe({
      next: (apiaries: ApiaryByUser[]) => {
        this.apiaries = apiaries
      },
      error: (error) => {
        this.snackBarService.openErrorSnackBar(this.translateService.instant('snackBar.error.getApiaries'))
        console.error('Error getting apiaries', error)
      }
    })
  }

  public addApiary() {
    this.dialog.open(ApiaryDialogComponent).afterClosed().subscribe({
      next: () => {
        this.getAllApiaries()
      }
    })
  }

  public deleteApiary(id: number) {
    this.apiaryService.deleteApiary(id).subscribe({
      next: () => {
        this.getAllApiaries()
        this.snackBarService.openInfoSnackBar(this.translateService.instant('snackBar.success.deleteApiary'))
      },
      error: (error: any) => {
        this.snackBarService.openErrorSnackBar(this.translateService.instant('snackBar.error.deleteApiary'))
        console.error('Error deleting apiary', error)
      }
    })
  }
}
