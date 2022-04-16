import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/common/loan';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.css']
})
export class LoansListComponent implements OnInit {

  loans: Loan[];

  constructor(private loanService: LoanService) { }

  ngOnInit() {
    this.listLoans();
  }

  listLoans() {
    this.loanService.getLoansList().subscribe(
      data => {
        this.loans = data;
      }
    )
  }

}
