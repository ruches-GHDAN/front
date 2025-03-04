import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClient, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http'
import { MultipleTransLoaderHttp } from './MultipleTransLoaderHttp'
import { provideRouter } from '@angular/router'
import { routes } from './app.routes'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { AuthInterceptor } from './services/auth.interceptor'

export function createTranslateLoader(http: HttpClient): MultipleTransLoaderHttp {
  return new MultipleTransLoaderHttp(http)
}

export const appConfig: ApplicationConfig = {
  providers: [
  provideHttpClient(withInterceptors([AuthInterceptor])),
  importProvidersFrom([
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      }
    })
  ]),
  provideRouter(routes)
  ]
}
