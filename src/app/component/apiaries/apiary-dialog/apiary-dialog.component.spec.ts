import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ApiaryDialogComponent} from './apiary-dialog.component';
import {HttpClientModule} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';
import {
  TranslateLoader,
  TranslateModule
} from '@ngx-translate/core';
import { MockTranslateLoader } from '../../../utils/MockTranslateLoader';

describe('ApiaryDialogComponent', () => {
  let component: ApiaryDialogComponent;
  let fixture: ComponentFixture<ApiaryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ApiaryDialogComponent,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader }
        })
      ],
      providers: [provideAnimations()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiaryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
