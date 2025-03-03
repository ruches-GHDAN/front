import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiaryDetailsComponent } from './apiary-details.component';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule
} from '@ngx-translate/core';
import { MockTranslateLoader } from '../../../utils/MockTranslateLoader';

describe('ApiaryDetailsComponent', () => {
  let component: ApiaryDetailsComponent;
  let fixture: ComponentFixture<ApiaryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ApiaryDetailsComponent,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader }
        })
      ],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
