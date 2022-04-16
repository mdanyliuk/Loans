import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loan } from '../common/loan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private baseUrl = 'http://localhost:8080/api/loans';
  private urlByEvent = 'http://localhost:8080/api/loans/event';
  private urlByPlayer = 'http://localhost:8080/api/loans/player';

  constructor(private httpClient: HttpClient) { }

  getLoansList(): Observable<Loan[]> {
    return this.httpClient.get<Loan[]>(this.baseUrl);
  }

  getLoansByEventList(eventId: string): Observable<Loan[]> {
    return this.httpClient.get<Loan[]>(`${this.urlByEvent}/${eventId}`);
    //return this.httpClient.get<Loan[]>(this.urlByEvent+"/"+eventId');
  }

  createLoan(loan: Loan): Observable<Loan> {
    return this.httpClient.post<Loan>(this.baseUrl, loan);
  }

  getLoansByPlayerList(playerId: string): Observable<Loan[]> {
    return this.httpClient.get<Loan[]>(`${this.urlByPlayer}/${playerId}`);
  }

  updateLoan(loan: Loan): Observable<Loan> {
    console.log(`${this.baseUrl}/${loan.id}`);
    return this.httpClient.put<Loan>(`${this.baseUrl}/${loan.id}`, loan);
  }

}
