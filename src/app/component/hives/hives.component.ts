import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip'
import { TranslatePipe } from '@ngx-translate/core'
import { RouterLink } from '@angular/router'
import { AllHives, Hives } from '../../models/Hives.model'
import { MatDialog } from '@angular/material/dialog'
import { HiveDialogComponent } from './hive-dialog/hive-dialog.component'
import { HiveService } from '../../services/hive.service'
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-hives',
  templateUrl: './hives.component.html',
  imports: [
    FormsModule,
    MatTooltip,
    TranslatePipe,
    RouterLink,
    DatePipe,
  ],
  styleUrls: ['./hives.component.scss']
})
export class HivesComponent {
  public searchText = ''
  public dialog = inject(MatDialog)
  public hives: AllHives[] = []

  public constructor(private hiveService: HiveService) {
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
        console.log('Hive added successfully')
      }
    })
  }
}
