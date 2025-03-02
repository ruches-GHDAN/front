import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-apiaries',
  imports: [
    FormsModule,
    TranslatePipe
  ],
  templateUrl: './apiaries.component.html',
  styleUrl: './apiaries.component.scss'
})
export class ApiariesComponent {
  searchText = '';

  apiaries = [
    { name: 'Rucher Urbain', location: 'Paris', hivesCount: 12, honeyProduced: 18, activeHives: 10 },
    { name: 'Rucher des Landes', location: 'Bordeaux', hivesCount: 8, honeyProduced: 22, activeHives: 7 },
    { name: 'Rucher du Périgord', location: 'Dordogne', hivesCount: 15, honeyProduced: 20, activeHives: 15 },
    { name: 'Rucher de la Provence', location: 'Marseille', hivesCount: 10, honeyProduced: 25, activeHives: 10 },
    { name: 'Rucher de la Vallée', location: 'Lyon', hivesCount: 7, honeyProduced: 19, activeHives: 6 },
    { name: 'Rucher de Châtaignier', location: 'Toulouse', hivesCount: 9, honeyProduced: 21, activeHives: 9 },
    { name: 'Rucher des Alpes', location: 'Grenoble', hivesCount: 11, honeyProduced: 16, activeHives: 11 }
  ];

  get filteredApiaries() {
    return this.apiaries.filter(apiary => apiary.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  addApiary() {
    console.log('Ajouter un rucher');
  }

  viewApiary(apiary: any) {
    console.log('Voir les détails du rucher', apiary);
  }
}
