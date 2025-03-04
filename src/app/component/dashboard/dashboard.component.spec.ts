import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MockTranslateLoader } from '../../utils/MockTranslateLoader';
import {HttpClientModule} from '@angular/common/http';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DashboardComponent,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader }
        })
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    component.mapData = [
      {
        latitude: 46.98878785962237,
        longitude: 5.364643002313322
      },
      {
        latitude: 46.991311598616214,
        longitude: 5.3721625122334284
      }
    ]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
