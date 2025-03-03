import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiveDetailsComponent } from './hive-details.component';
import { provideRouter } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MockTranslateLoader } from '../../../utils/MockTranslateLoader';
import { HttpClientModule } from '@angular/common/http';

describe('HiveDetailsComponent', () => {
  let component: HiveDetailsComponent;
  let fixture: ComponentFixture<HiveDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HiveDetailsComponent,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader }
        })
      ],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
