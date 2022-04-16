import { Component, OnInit, Input } from '@angular/core';
import { Loan } from 'src/app/common/loan';
import { Player } from 'src/app/common/player';
import { LoanService } from 'src/app/services/loan.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-loan-by-event',
  templateUrl: './add-loan-by-event.component.html',
  styleUrls: ['./add-loan-by-event.component.css']
})
export class AddLoanByEventComponent implements OnInit {

  constructor(private loanService: LoanService,
              private playerService: PlayerService) { }

  @Input() loan: Loan;
  sum: number;
  player: number;
  playersList: Player[];

  ngOnInit(): void {
    this.loadPlayersList();
    this.sum = this.loan.sum;
    this.player = this.loan.player;
  }

  loadPlayersList() {
    this.playerService.getPlayersList().subscribe(
      data => {
        this.playersList = data;
      }
    )
  }

  addLoan() {
    this.loan.sum = this.sum;
    this.loan.player = this.player;
    console.log(this.loan.event);
    this.loanService.createLoan(this.loan)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

}
