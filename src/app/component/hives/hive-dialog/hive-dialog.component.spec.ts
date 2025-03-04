import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiveDialogComponent } from './hive-dialog.component';
import {HttpClientModule} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';
import {
  TranslateLoader,
  TranslateModule
} from '@ngx-translate/core';
import { MockTranslateLoader } from '../../../utils/MockTranslateLoader';

describe('HiveDialogComponent', () => {
  let component: HiveDialogComponent;
  let fixture: ComponentFixture<HiveDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HiveDialogComponent,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader }
        })
      ],
      providers: [provideAnimations()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
