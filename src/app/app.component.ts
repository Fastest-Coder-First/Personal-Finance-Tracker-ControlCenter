import { Component } from '@angular/core';
import { FinanceTrackerService } from './services/finance-tracker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Persoanl-Finance-Tracker';
  constructor(private financeTrackerService: FinanceTrackerService) {
    
  }
}
