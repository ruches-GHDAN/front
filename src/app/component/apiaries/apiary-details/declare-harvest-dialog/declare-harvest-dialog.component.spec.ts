import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DeclareHarvestDialogComponent } from './declare-harvest-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule
} from '@ngx-translate/core';
import { MockTranslateLoader } from '../../../../utils/MockTranslateLoader';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('DeclareHarvestDialogComponent', () => {
  let component: DeclareHarvestDialogComponent;
  let fixture: ComponentFixture<DeclareHarvestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DeclareHarvestDialogComponent,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader }
        })
      ],
      providers: [
        provideAnimations(),
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclareHarvestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
