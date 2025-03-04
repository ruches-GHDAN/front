import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclareHarvestDialogComponent } from './declare-harvest-dialog.component';

describe('DeclareHarvestDialogComponent', () => {
  let component: DeclareHarvestDialogComponent;
  let fixture: ComponentFixture<DeclareHarvestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeclareHarvestDialogComponent]
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
