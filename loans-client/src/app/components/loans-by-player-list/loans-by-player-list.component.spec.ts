import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansByPlayerListComponent } from './loans-by-player-list.component';

describe('LoansByPlayerListComponent', () => {
  let component: LoansByPlayerListComponent;
  let fixture: ComponentFixture<LoansByPlayerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansByPlayerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansByPlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
