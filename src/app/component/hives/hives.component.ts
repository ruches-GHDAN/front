import { Component, inject, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip'
import { TranslatePipe, TranslateService } from '@ngx-translate/core'
import { RouterLink } from '@angular/router'
import { AllHives, Hives } from '../../models/Hives.model'
import { MatDialog } from '@angular/material/dialog'
import { HiveDialogComponent } from './hive-dialog/hive-dialog.component'
import { HiveService } from '../../services/hive.service'
import { DatePipe } from '@angular/common'
import { MatIcon } from '@angular/material/icon'
import { MatIconButton } from '@angular/material/button'
import { SnackBarService } from '../../services/SnackBar-service'

@Component({
  selector: 'app-hives',
  templateUrl: './hives.component.html',
  imports: [
    FormsModule,
    MatTooltip,
    TranslatePipe,
    RouterLink,
    DatePipe,
    MatIcon,
    MatIconButton,
  ],
  styleUrls: ['./hives.component.scss']
})
export class HivesComponent implements OnInit {
  public searchText = ''
  public dialog = inject(MatDialog)
  public hives: AllHives[] = []

  public constructor(private hiveService: HiveService,
                     private snackBarService: SnackBarService,
                     private translateService: TranslateService) {
  }

  public ngOnInit() {
    this.getAllHives()
  }

  public getAllHives() {
    this.hiveService.getAllHives().subscribe({
      next: (hives) => {
        this.hives = hives
      },
      error: (error) => {
        this.snackBarService.openErrorSnackBar(this.translateService.instant('snackBar.error.getHives'))
        console.error('Error fetching hives', error)
      }
    })
  }

  get filteredHives() {
    return this.hives.filter(hive => hive.HiveRegistration.toString().includes(this.searchText.toLowerCase()))
  }

  public addHive() {
    this.dialog.open(HiveDialogComponent).afterClosed().subscribe({
      next: () => {
        this.getAllHives()
      }
    })
  }

  public deleteHive(id: number) {
    this.hiveService.deleteHive(id).subscribe({
      next: () => {
        this.getAllHives()
        this.snackBarService.openInfoSnackBar(this.translateService.instant('snackBar.success.deleteHive'))
      },
      error: (error: any) => {
        console.error('Error deleting hive', error)
        this.snackBarService.openErrorSnackBar(this.translateService.instant('snackBar.error.deleteHive'))
      }
    })
  }
}
