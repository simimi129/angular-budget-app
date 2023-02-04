import { Component, OnInit } from '@angular/core';
import {
  Transaction,
  TransactionsService,
} from '../services/transactions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  public transactions$: Observable<Transaction[]> | undefined;
  public income$: Observable<number> | undefined;
  public outcome$: Observable<number> | undefined;
  public total$: Observable<number> | undefined;

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.transactions$ = this.transactionsService.getTransactions();
    this.income$ = this.transactionsService.getIncome();
    this.outcome$ = this.transactionsService.getOutcome();
    this.total$ = this.transactionsService.getTotal();

    this.transactionsService.init();
  }
}
