import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../common/event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = 'http://localhost:8080/api/events';

  constructor(private httpClient: HttpClient) { }

  getEventsList(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.baseUrl);
  }

  createEvent(event: Event): Observable<Event> {
    return this.httpClient.post<Event>(this.baseUrl, event);
  }

  getEvent(id: string): Observable<Event> {
    return this.httpClient.get<Event>(`${this.baseUrl}/${id}`);
  }

  getEventNameById(id: number): Observable<Event> {
    const eventUrl = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Event>(eventUrl);
  }

}
