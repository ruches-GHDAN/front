import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip'
import { TranslatePipe } from '@ngx-translate/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-hives',
  templateUrl: './hives.component.html',
  imports: [
    FormsModule,
    MatTooltip,
    TranslatePipe,
    RouterLink,
  ],
  styleUrls: ['./hives.component.scss']
})
export class HivesComponent {
  searchText = '';

  hives = [
    { id: 1, name: 'Ruche de Lavande', apiary: 'Rucher Urbain', installationDate: '15/03/2021', size: 'Grande', disease: 'Varroa', queenYear: 2021, status: 'Production', cleaning: 1 },
    { id: 2, name: 'Ruche de Châtaignier', apiary: 'Rucher des Landes', installationDate: '22/04/2020', size: 'Moyenne', disease: '-', queenYear: 2020, status: 'Stockage', cleaning: 0 },
    { id: 3, name: 'Ruche des Mimosas', apiary: 'Rucher des Landes', installationDate: '30/05/2019', size: 'Petite', disease: '-', queenYear: 2019, status: 'Production', cleaning: 1 },
    { id: 4, name: 'Ruche de Sapin', apiary: 'Rucher Urbain', installationDate: '10/06/2022', size: 'Grande', disease: 'Nosema', queenYear: 2022, status: 'Production', cleaning: 1 },
    { id: 5, name: 'Ruche de Tournesol', apiary: 'Rucher des Landes', installationDate: '12/07/2021', size: 'Moyenne', disease: '-', queenYear: 2021, status: 'Stockage', cleaning: 0 },
    { id: 6, name: 'Ruche de Chêne', apiary: 'Rucher du Périgord', installationDate: '18/08/2020', size: 'Petite', disease: 'Varroa', queenYear: 2020, status: 'Production', cleaning: 1 },
    { id: 7, name: 'Ruche de Romarin', apiary: 'Rucher Urbain', installationDate: '05/10/2022', size: 'Moyenne', disease: '-', queenYear: 2022, status: 'Production', cleaning: 0 },
    { id: 8, name: 'Ruche de Lierre', apiary: 'Rucher Urbain', installationDate: '11/11/2021', size: 'Petite', disease: 'Acarapiose', queenYear: 2021, status: 'Stockage', cleaning: 1 },
    { id: 9, name: 'Ruche de Colza', apiary: 'Rucher du Périgord', installationDate: '23/12/2020', size: 'Grande', disease: '-', queenYear: 2020, status: 'Production', cleaning: 0 },
    { id: 10, name: 'Ruche de Chêne Vert', apiary: 'Rucher des Landes', installationDate: '14/01/2019', size: 'Moyenne', disease: '-', queenYear: 2019, status: 'Stockage', cleaning: 1 },
    { id: 11, name: 'Ruche de Bruyère', apiary: 'Rucher du Périgord', installationDate: '19/02/2018', size: 'Petite', disease: '-', queenYear: 2018, status: 'Production', cleaning: 0 },
    { id: 12, name: 'Ruche de Thym', apiary: 'Rucher Urbain', installationDate: '07/04/2022', size: 'Moyenne', disease: '-', queenYear: 2022, status: 'Production', cleaning: 1 },
    { id: 13, name: 'Ruche de Limonier', apiary: 'Rucher Urbain', installationDate: '21/05/2020', size: 'Petite', disease: '-', queenYear: 2020, status: 'Stockage', cleaning: 0 },
    { id: 14, name: 'Ruche des Fleurs Sauvages', apiary: 'Rucher Urbain', installationDate: '03/06/2019', size: 'Grande', disease: '-', queenYear: 2019, status: 'Production', cleaning: 1 },
    { id: 15, name: 'Ruche de Saule', apiary: 'Rucher du Périgord', installationDate: '15/07/2021', size: 'Moyenne', disease: '-', queenYear: 2021, status: 'Stockage', cleaning: 0 },
    { id: 16, name: 'Ruche de Cèdre', apiary: 'Rucher du Périgord', installationDate: '09/08/2020', size: 'Petite', disease: '-', queenYear: 2020, status: 'Production', cleaning: 1 },
    { id: 17, name: 'Ruche de Bruyère Erica', apiary: 'Rucher du Périgord', installationDate: '12/10/2022', size: 'Moyenne', disease: '-', queenYear: 2022, status: 'Production', cleaning: 0 }
  ];

  get filteredHives() {
    return this.hives.filter(hive => hive.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  addHive() {
    console.log('Ajouter une ruche');
  }
}
