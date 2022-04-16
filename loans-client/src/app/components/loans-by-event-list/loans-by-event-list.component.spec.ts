import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansByEventListComponent } from './loans-by-event-list.component';

describe('LoansByEventListComponent', () => {
  let component: LoansByEventListComponent;
  let fixture: ComponentFixture<LoansByEventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansByEventListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansByEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
