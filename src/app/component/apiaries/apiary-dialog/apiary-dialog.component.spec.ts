import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiaryDialogComponent } from './apiary-dialog.component';

describe('ApiaryDialogComponent', () => {
  let component: ApiaryDialogComponent;
  let fixture: ComponentFixture<ApiaryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiaryDialogComponent]
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
