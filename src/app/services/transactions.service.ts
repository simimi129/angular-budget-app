import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Transaction {
  name: string;
  amount: number;
  category: string;
  type: string;
}

@Injectable({ providedIn: 'root' })
export class TransactionsService {
  private transactions$ = new BehaviorSubject<Transaction[]>([]);
  private income$ = new BehaviorSubject<number>(0);
  private outcome$ = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {}

  public init(): void {
    this.http
      .get<Transaction[]>(
        'https://ng-budget-b59c9-default-rtdb.europe-west1.firebasedatabase.app/transactions.json'
      )
      .subscribe((data) => {
        const transactions = Object.values(data);
        const income = transactions
          .filter((t) => t.type === 'income')
          .reduce((sum, t2) => sum + t2.amount, 0);
        const outcome = transactions
          .filter((t) => t.type === 'outcome')
          .reduce((sum, t2) => sum + t2.amount, 0);
        this.transactions$.next(transactions);
        this.income$.next(income);
        this.outcome$.next(outcome);
        console.log(this.transactions$);
      });
  }

  public getTransactions(): Observable<Transaction[]> {
    return this.transactions$;
  }

  public getIncome(): Observable<number> {
    return this.income$;
  }

  public getOutcome(): Observable<number> {
    return this.outcome$;
  }
}
