import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { MultipleTransLoaderHttp } from './MultipleTransLoaderHttp';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public selectedLanguage: string

  constructor(
    private translateService: MultipleTransLoaderHttp,
    private translate: TranslateService
  ) {
    this.selectedLanguage = this.translateService.getLang() || 'fr'
    this.translateService.setLang(this.selectedLanguage)
    this.translate.use(this.selectedLanguage)
  }
}
