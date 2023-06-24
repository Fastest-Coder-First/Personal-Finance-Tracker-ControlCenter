import { Injectable } from '@angular/core';
import { FinanceData } from './models/finance-data';
import { BehaviorSubject } from 'rxjs';
import { Transaction } from './models/transaction';

@Injectable({
  providedIn: 'root'
})
export class FinanceTrackerService {
  private financeData: FinanceData;

  balance: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  transactions: BehaviorSubject<Transaction[]> = new BehaviorSubject<Transaction[]>([]);

  constructor() {
    const savedFinanceData = localStorage.getItem('financeData');
    if (savedFinanceData === null) {
      this.financeData = this.createNewFinanceData();
    } else {
      this.financeData = JSON.parse(savedFinanceData);
    }
    this.financeData = savedFinanceData === null ? this.createNewFinanceData(): JSON.parse(savedFinanceData);
    this.saveFinanceData();
  }

  createNewFinanceData() {
    return {
      transactions: []
    };
  }

  recordTransaction(title: string, amount: number) {
    const newTransaction = {
      id: this.financeData.transactions.length,
      title,
      amount
    };
    this.financeData.transactions.push(newTransaction);
    this.saveFinanceData();
  }

  saveFinanceData() {
    this.balance.next(this.financeData.transactions.reduce((acc, curr) => { return acc + curr.amount; }, 0));
    this.transactions.next(this.financeData.transactions);
    localStorage.setItem('financeData', JSON.stringify(this.financeData));
  }

  deleteTransaction(id: number) {
    this.financeData.transactions = this.financeData.transactions.filter(transaction => transaction.id !== id);
    this.saveFinanceData();
  }
}
