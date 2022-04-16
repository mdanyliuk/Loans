import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/common/player';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  player: Player = new Player();
  submitted: boolean = false;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.submitted = false;
  }
  

  savePlayer(): void {
    const data = {
      name: this.player.name
    };
    
    this.playerService.createPlayer(this.player)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
    
  }

  newPlayer(): void {
    this.submitted = false;
    this.player = {
      id: 0,
      name: ''
    };
  }
  
}
