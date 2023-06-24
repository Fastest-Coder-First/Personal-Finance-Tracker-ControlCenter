import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceTrackerService {

  balance: BehaviorSubject<number>;

  constructor() {
    const balance = localStorage.getItem('balance');
    console.log(balance);
    this.balance = new BehaviorSubject<number>(0);
  }


}
