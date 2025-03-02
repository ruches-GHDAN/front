import { TranslateLoader } from '@ngx-translate/core';
import { of } from 'rxjs';

export class MockTranslateLoader implements TranslateLoader {
  getTranslation(lang: string) {
    return of({});
  }
}
