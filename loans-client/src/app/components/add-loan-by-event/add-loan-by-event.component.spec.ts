import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoanByEventComponent } from './add-loan-by-event.component';

describe('AddLoanByEventComponent', () => {
  let component: AddLoanByEventComponent;
  let fixture: ComponentFixture<AddLoanByEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLoanByEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLoanByEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
