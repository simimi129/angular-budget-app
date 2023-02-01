import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Transaction {
  name: string;
  amount: number;
}

@Injectable({ providedIn: 'root' })
export class TransactionsService {
  private transactions$ = new BehaviorSubject<Transaction[]>([]);

  constructor(private http: HttpClient) {}

  public init(): void {
    this.http
      .get<Transaction[]>(
        'https://ng-budget-b59c9-default-rtdb.europe-west1.firebasedatabase.app/transactions.json'
      )
      .subscribe((transactions) => {
        this.transactions$.next(Object.values(transactions));
      });
  }

  public getTransactions(): Observable<Transaction[]> {
    return this.transactions$;
  }
}
