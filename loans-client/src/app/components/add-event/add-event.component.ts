import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/common/event';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event: Event = new Event();
  submitted: boolean = false;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.submitted = false;
  }
  

  saveEvent(): void {
    const data = {
      name: this.event.name,
      date: this.event.date
    };
    
    this.eventService.createEvent(this.event)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
    
  }

  newEvent(): void {
    let currentDate = new Date();
    this.submitted = false;
    this.event = {
      id: 0,
      name: '',
      date: currentDate
    };
  }

}
