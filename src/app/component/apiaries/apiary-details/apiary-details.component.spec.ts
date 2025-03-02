import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiaryDetailsComponent } from './apiary-details.component';

describe('ApiaryDetailsComponent', () => {
  let component: ApiaryDetailsComponent;
  let fixture: ComponentFixture<ApiaryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiaryDetailsComponent]
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
