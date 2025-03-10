import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HivesComponent } from './hives.component';
import { provideRouter } from '@angular/router';
import { MockTranslateLoader } from '../../utils/MockTranslateLoader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

describe('HivesComponent', () => {
  let component: HivesComponent;
  let fixture: ComponentFixture<HivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HivesComponent,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader }
        })
      ],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
