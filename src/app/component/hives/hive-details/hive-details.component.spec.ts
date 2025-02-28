import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiveDetailsComponent } from './hive-details.component';

describe('HiveDetailsComponent', () => {
  let component: HiveDetailsComponent;
  let fixture: ComponentFixture<HiveDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiveDetailsComponent]
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
