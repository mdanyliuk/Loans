import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoanService } from 'src/app/services/loan.service';
import { PlayerService } from 'src/app/services/player.service';
import { Loan } from 'src/app/common/loan';

@Component({
  selector: 'app-loans-by-player-list',
  templateUrl: './loans-by-player-list.component.html',
  styleUrls: ['./loans-by-player-list.component.css']
})
export class LoansByPlayerListComponent implements OnInit {
  
  id: string;
  player: number;
  playerName: string;
  loans: Loan[];
  totalSum: number;

  constructor(private route: ActivatedRoute, 
              private loanService: LoanService,
              private playerService: PlayerService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.player = +this.id;
    this.listLoansByPlayer();
    this.getPlayerName();
  }

  listLoansByPlayer() {
    this.loanService.getLoansByPlayerList(this.id).subscribe(
      data => {
        this.loans = data;
        this.findTotal(data);
      }
    )
  }

  findTotal(data) {
    this.totalSum = 0;
    for(let i = 0; i < data.length; i++) {
      this.totalSum += data[i].sum;
    }
  }

  getPlayerName() {
    this.playerService.getPlayerNameById(+this.id).subscribe(
      data => {
        this.playerName = data.name;
      }
    )

  }

  closeClick() {
    this.listLoansByPlayer();
  }

  payLoansClick() {
    for (let i = 0; i < this.loans.length; i++) {
      let l: Loan = {id: this.loans[i].id,
        sum: this.loans[i].sum,
        paid: true,
        event: this.loans[i].event,
        player: this.loans[i].player,
        playerName: this.loans[i].playerName,
        eventName: this.loans[i].eventName};
      
      this.loanService.updateLoan(l).subscribe();
    }
  }

}
