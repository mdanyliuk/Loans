import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerService } from './services/player.service';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { LoansListComponent } from './components/loans-list/loans-list.component';
import { LoansByEventListComponent } from './components/loans-by-event-list/loans-by-event-list.component';
import { AddLoanByEventComponent } from './components/add-loan-by-event/add-loan-by-event.component';
import { LoansByPlayerListComponent } from './components/loans-by-player-list/loans-by-player-list.component';

const routes: Routes = [
  {path: 'players', component: PlayersListComponent},
  {path: 'add-player', component: AddPlayerComponent},
  {path: 'events', component: EventsListComponent},
  {path: 'add-event', component: AddEventComponent},
  {path: 'loans/event/:id', component: LoansByEventListComponent},
  {path: 'add-loan/event/:id', component: AddLoanByEventComponent},
  {path: 'loans/player/:id', component: LoansByPlayerListComponent},
  {path: '', redirectTo: '/players', pathMatch: 'full'},
  {path: '**', redirectTo: '/players', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    AddPlayerComponent,
    EventsListComponent,
    AddEventComponent,
    LoansListComponent,
    LoansByEventListComponent,
    AddLoanByEventComponent,
    LoansByPlayerListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
