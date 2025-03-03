import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip'
import { TranslatePipe } from '@ngx-translate/core'
import { RouterLink } from '@angular/router'
import { Hives } from '../../models/Hives.model'
import { MatDialog } from '@angular/material/dialog'
import { HiveDialogComponent } from './hive-dialog/hive-dialog.component'

@Component({
  selector: 'app-hives',
  templateUrl: './hives.component.html',
  imports: [
    FormsModule,
    MatTooltip,
    TranslatePipe,
    RouterLink
  ],
  styleUrls: ['./hives.component.scss']
})
export class HivesComponent {
  public searchText = ''
  public dialog = inject(MatDialog)

  hives: Hives[] = [
    { id: 1, name: 'Ruche de Lavande', apiary: 'Rucher Urbain', createdDate: '15/03/2021', size: 'Grande', disease: 'Varroa', queenYear: 2021, status: 'Production', cleaning:'propre'},
    { id: 2, name: 'Ruche de Châtaignier', apiary: 'Rucher des Landes', createdDate: '22/04/2020', size: 'Moyenne', disease: '-', queenYear: 2020, status: 'Stockage', cleaning:'sale'},
    { id: 3, name: 'Ruche des Mimosas', apiary: 'Rucher des Landes', createdDate: '30/05/2019', size: 'Petite', disease: '-', queenYear: 2019, status: 'Production', cleaning:'propre'},
    { id: 4, name: 'Ruche de Sapin', apiary: 'Rucher Urbain', createdDate: '10/06/2022', size: 'Grande', disease: 'Nosema', queenYear: 2022, status: 'Production', cleaning:'propre'},
    { id: 5, name: 'Ruche de Tournesol', apiary: 'Rucher des Landes', createdDate: '12/07/2021', size: 'Moyenne', disease: '-', queenYear: 2021, status: 'Stockage', cleaning:'sale'},
    { id: 6, name: 'Ruche de Chêne', apiary: 'Rucher du Périgord', createdDate: '18/08/2020', size: 'Petite', disease: 'Varroa', queenYear: 2020, status: 'Production', cleaning:'propre'},
    { id: 7, name: 'Ruche de Romarin', apiary: 'Rucher Urbain', createdDate: '05/10/2022', size: 'Moyenne', disease: '-', queenYear: 2022, status: 'Production', cleaning:'sale'},
    { id: 8, name: 'Ruche de Lierre', apiary: 'Rucher Urbain', createdDate: '11/11/2021', size: 'Petite', disease: 'Acarapiose', queenYear: 2021, status: 'Stockage', cleaning:'propre'},
    { id: 9, name: 'Ruche de Colza', apiary: 'Rucher du Périgord', createdDate: '23/12/2020', size: 'Grande', disease: '-', queenYear: 2020, status: 'Production', cleaning:'sale'},
    { id: 10, name: 'Ruche de Chêne Vert', apiary: 'Rucher des Landes', createdDate: '14/01/2019', size: 'Moyenne', disease: '-', queenYear: 2019, status: 'Stockage', cleaning:'propre'},
    { id: 11, name: 'Ruche de Bruyère', apiary: 'Rucher du Périgord', createdDate: '19/02/2018', size: 'Petite', disease: '-', queenYear: 2018, status: 'Production', cleaning:'sale'},
    { id: 12, name: 'Ruche de Thym', apiary: 'Rucher Urbain', createdDate: '07/04/2022', size: 'Moyenne', disease: '-', queenYear: 2022, status: 'Production', cleaning:'propre'},
    { id: 13, name: 'Ruche de Limonier', apiary: 'Rucher Urbain', createdDate: '21/05/2020', size: 'Petite', disease: '-', queenYear: 2020, status: 'Stockage', cleaning:'sale'},
    { id: 14, name: 'Ruche des Fleurs Sauvages', apiary: 'Rucher Urbain', createdDate: '03/06/2019', size: 'Grande', disease: '-', queenYear: 2019, status: 'Production', cleaning:'propre'},
    { id: 15, name: 'Ruche de Saule', apiary: 'Rucher du Périgord', createdDate: '15/07/2021', size: 'Moyenne', disease: '-', queenYear: 2021, status: 'Stockage', cleaning:'sale'},
    { id: 16, name: 'Ruche de Cèdre', apiary: 'Rucher du Périgord', createdDate: '09/08/2020', size: 'Petite', disease: '-', queenYear: 2020, status: 'Production', cleaning:'propre'},
    { id: 17, name: 'Ruche de Bruyère Erica', apiary: 'Rucher du Périgord', createdDate: '12/10/2022', size: 'Moyenne', disease: '-', queenYear: 2022, status: 'Production', cleaning:'sale'}
  ]

  get filteredHives() {
    return this.hives.filter(hive => hive.name.toLowerCase().includes(this.searchText.toLowerCase()))
  }

  public addHive() {
    this.dialog.open(HiveDialogComponent).afterClosed().subscribe({
      next: () => {
        console.log('Hive added successfully')
      }
    })
  }
}
