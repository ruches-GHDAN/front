import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { MultipleTransLoaderHttp } from './MultipleTransLoaderHttp';
import { NavbarComponent } from './component/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedLanguage: string;
  public showNavbar = true;

  constructor(
    private translateService: MultipleTransLoaderHttp,
    private translate: TranslateService,
    private router: Router
  ) {
    this.selectedLanguage = this.translateService.getLang() || 'fr';
    this.translateService.setLang(this.selectedLanguage);
    this.translate.use(this.selectedLanguage);
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = !['/login', '/register'].includes(event.urlAfterRedirects);
      }
    });
  }
}
