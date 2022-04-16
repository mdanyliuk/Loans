import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../common/player';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private baseUrl = 'http://localhost:8080/api/players';

  constructor(private httpClient: HttpClient) { }

  getPlayersList(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(this.baseUrl);
  }

  createPlayer(player: Player): Observable<Player> {
    return this.httpClient.post<Player>(this.baseUrl, player);
  }

  getPlayerNameById(id: number): Observable<Player> {
    const playerUrl = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Player>(playerUrl);
  }
}

