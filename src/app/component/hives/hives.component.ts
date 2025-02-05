import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-hives',
  templateUrl: './hives.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./hives.component.scss']
})
export class HivesComponent {
  searchText = '';

  hives = [
    { name: 'Ruche de Lavande', apiary: 'Rucher Urbain', installationDate: '15/03/2021', size: 'Grande', race: 'Italienne', disease: 'Varroa', taste: 'Doux', queenYear: 2021, status: 'Production' },
    { name: 'Ruche de Châtaignier', apiary: 'Rucher des Landes', installationDate: '22/04/2020', size: 'Moyenne', race: 'Buckfast', disease: '-', taste: 'Corsé', queenYear: 2020, status: 'Stockage' },
    { name: 'Ruche des Mimosas', apiary: 'Rucher des Landes', installationDate: '30/05/2019', size: 'Petite', race: 'Caucasienne', disease: '-', taste: 'Fruité', queenYear: 2019, status: 'Production' },
    { name: 'Ruche de Sapin', apiary: 'Rucher Urbain', installationDate: '10/06/2022', size: 'Grande', race: 'Carniolienne', disease: 'Nosema', taste: 'Boisé', queenYear: 2022, status: 'Production' },
    { name: 'Ruche de Tournesol', apiary: 'Rucher des Landes', installationDate: '12/07/2021', size: 'Moyenne', race: 'Italienne', disease: '-', taste: 'Fruité', queenYear: 2021, status: 'Stockage' },
    { name: 'Ruche de Chêne', apiary: 'Rucher du Périgord', installationDate: '18/08/2020', size: 'Petite', race: 'Noire', disease: 'Varroa', taste: 'Amer', queenYear: 2020, status: 'Production' },
    { name: 'Ruche des Alpes', apiary: 'Rucher des Landes', installationDate: '20/09/2018', size: 'Grande', race: 'Caucasienne', disease: '-', taste: 'Mielé', queenYear: 2018, status: 'Stockage' },
    { name: 'Ruche de Romarin', apiary: 'Rucher Urbain', installationDate: '05/10/2022', size: 'Moyenne', race: 'Italienne', disease: '-', taste: 'Aromatique', queenYear: 2022, status: 'Production' },
    { name: 'Ruche de Lierre', apiary: 'Rucher Urbain', installationDate: '11/11/2021', size: 'Petite', race: 'Buckfast', disease: 'Acarapiose', taste: 'Herbacé', queenYear: 2021, status: 'Stockage' },
    { name: 'Ruche de Colza', apiary: 'Rucher du Périgord', installationDate: '23/12/2020', size: 'Grande', race: 'Carniolienne', disease: '-', taste: 'Léger', queenYear: 2020, status: 'Production' },
    { name: 'Ruche de Chêne Vert', apiary: 'Rucher des Landes', installationDate: '14/01/2019', size: 'Moyenne', race: 'Noire', disease: '-', taste: 'Boisé', queenYear: 2019, status: 'Stockage' },
    { name: 'Ruche des Bruyères', apiary: 'Rucher du Périgord', installationDate: '19/02/2018', size: 'Petite', race: 'Caucasienne', disease: '-', taste: 'Intense', queenYear: 2018, status: 'Production' },
    { name: 'Ruche des Gorges', apiary: 'Rucher du Périgord', installationDate: '29/03/2021', size: 'Grande', race: 'Italienne', disease: '-', taste: 'Aromatique', queenYear: 2021, status: 'Stockage' },
    { name: 'Ruche de Thym', apiary: 'Rucher Urbain', installationDate: '07/04/2022', size: 'Moyenne', race: 'Buckfast', disease: '-', taste: 'Épicé', queenYear: 2022, status: 'Production' },
    { name: 'Ruche de Limonier', apiary: 'Rucher Urbain', installationDate: '21/05/2020', size: 'Petite', race: 'Caucasienne', disease: '-', taste: 'Acidulé', queenYear: 2020, status: 'Stockage' },
    { name: 'Ruche des Fleurs Sauvages', apiary: 'Rucher Urbain', installationDate: '03/06/2019', size: 'Grande', race: 'Carniolienne', disease: '-', taste: 'Floral', queenYear: 2019, status: 'Production' },
    { name: 'Ruche de Saule', apiary: 'Rucher du Périgord', installationDate: '15/07/2021', size: 'Moyenne', race: 'Noire', disease: '-', taste: 'Subtil', queenYear: 2021, status: 'Stockage' },
    { name: 'Ruche de Cèdre', apiary: 'Rucher du Périgord', installationDate: '09/08/2020', size: 'Petite', race: 'Italienne', disease: '-', taste: 'Résineux', queenYear: 2020, status: 'Production' },
    { name: 'Ruche des Chênes Blancs', apiary: 'Rucher du Périgord', installationDate: '01/09/2019', size: 'Grande', race: 'Buckfast', disease: '-', taste: 'Amer', queenYear: 2019, status: 'Stockage' },
    { name: 'Ruche de Bruyère Erica', apiary: 'Rucher du Périgord', installationDate: '12/10/2022', size: 'Moyenne', race: 'Caucasienne', disease: '-', taste: 'Intense', queenYear: 2022, status: 'Production' }
  ];

  get filteredHives() {
    return this.hives.filter(hive => hive.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  addHive() {
    console.log('Ajouter une ruche');
  }
}
