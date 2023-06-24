import { Component } from '@angular/core';
import { FinanceTrackerService } from './services/finance-tracker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newEntry: {
    title: string;
    amount: number;
  } = {
    title: '',
    amount: 0
  };

  transactions$ = this.financeTrackerService.transactions;

  balance$ = this.financeTrackerService.balance;

  constructor(private financeTrackerService: FinanceTrackerService) {}

  addExpense() {
    this.financeTrackerService.recordTransaction('Expense', -100);
  }

  addIncome() {
    this.financeTrackerService.recordTransaction('Income', 200);
  }

  addTransaction(isIncome: boolean) {
    this.financeTrackerService.recordTransaction(this.newEntry.title, isIncome ? this.newEntry.amount : -this.newEntry.amount);
  }

  deleteTransaction(id: number) {
    this.financeTrackerService.deleteTransaction(id);
  }

  getClass(amount: number) {
    return {
      'is-success': Number(amount) > 0,
      'is-danger': Number(amount) < 0
    };
  }

  getValue(amount: number) {
    return ((amount > 0 ? amount : -amount)).toFixed(2);
  }

  getBalance() {
    return this.getValue(this.balance$.getValue());
  }
}
