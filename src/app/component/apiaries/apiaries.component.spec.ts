import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiariesComponent } from './apiaries.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MockTranslateLoader} from '../../utils/MockTranslateLoader';

describe('ApiariesComponent', () => {
  let component: ApiariesComponent;
  let fixture: ComponentFixture<ApiariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ApiariesComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader }
        })
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
