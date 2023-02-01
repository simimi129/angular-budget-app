import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Transaction,
  TransactionsService,
} from '../services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  public transactions$: Observable<Transaction[]> | undefined;

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.transactions$ = this.transactionsService.getTransactions();

    this.transactionsService.init();
  }
}
