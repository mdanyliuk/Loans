import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Loan } from 'src/app/common/loan';
import { Event } from 'src/app/common/event';
import { LoanService } from 'src/app/services/loan.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-loans-by-event-list',
  templateUrl: './loans-by-event-list.component.html',
  styleUrls: ['./loans-by-event-list.component.css']
})
export class LoansByEventListComponent implements OnInit {
  id: string;
  event: number;
  loans: Loan[];
  activateAddLoanComp: boolean = false;
  loan: Loan;
  eventName: string;

  constructor(private route: ActivatedRoute, 
              private loanService: LoanService,
              private eventService: EventService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.event = +this.id;
    //this.eventService.getEvent(this.id).subscribe(
    //  data => {
    //    this.event = data;
    //  }
    //)
    //this.event = this.eventService.getEvent(this.id);
    this.listLoansByEvent();
    this.getEventName();
  }

  listLoansByEvent() {
    this.loanService.getLoansByEventList(this.id).subscribe(
      data => {
        this.loans = data;
      }
    )
  }

  getEventName() {
    this.eventService.getEventNameById(+this.id).subscribe(
      data => {
        this.eventName = data.name;
      }
    )

  }

  closeClick() {
    this.activateAddLoanComp = false;
    this.listLoansByEvent();
  }

  addLoanClick() {
    this.loan = {
      id: 0,
      sum: 0,
      paid: false,
      event: this.event,
      player: 0,
      playerName: "",
      eventName: ""
    }
    this.activateAddLoanComp = true;
  }
  

}


