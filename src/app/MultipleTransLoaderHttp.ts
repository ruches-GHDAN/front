import { HttpClient } from "@angular/common/http"
import { TranslateLoader } from "@ngx-translate/core"
import { forkJoin, Observable } from "rxjs"
import { inject, Injectable, PLATFORM_ID } from '@angular/core'
import { map } from 'rxjs/operators'
import { isPlatformBrowser } from '@angular/common'

@Injectable({
  providedIn: 'root',
})

export class MultipleTransLoaderHttp implements TranslateLoader {
  private defaultLang: string = "fr"
  private currentLang: string = this.getLang()
  private platformId = inject(PLATFORM_ID)

  constructor(
    private http: HttpClient,
  ) {
    this.setLang(this.getLang())
  }

  public getTranslation(): Observable<any> {
    this.currentLang = this.getLang() || this.defaultLang
    return forkJoin([
      this.http.get(`./assets/i18n/login/${this.currentLang}.json`),
      this.http.get(`./assets/i18n/register/${this.currentLang}.json`),
      this.http.get(`./assets/i18n/loader/${this.currentLang}.json`),
      this.http.get(`./assets/i18n/snackBar/${this.currentLang}.json`),
      this.http.get(`./assets/i18n/hives/${this.currentLang}.json`),
      this.http.get(`./assets/i18n/navbar/${this.currentLang}.json`),
      this.http.get(`./assets/i18n/apiaries/${this.currentLang}.json`),
      this.http.get(`./assets/i18n/dashboard/${this.currentLang}.json`)
    ]).pipe(
      map((translations) => {
        return Object.assign({}, ...translations)
      })
    )
  }

  public setLang(lang: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang)
    }
  }

  public getLang(): string {
     if(isPlatformBrowser(this.platformId)){
       return localStorage.getItem('lang') || this.defaultLang
     }
        return this.defaultLang
  }
}
