import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-case-card',
  standalone: false,
  templateUrl: './case-card.html',
  styleUrl: './case-card.css',
})
export class CaseCard {

  @Input() case: any;

  getProgress(): number {
    console.log('Calculating progress for case:', this.case);
    return Math.min((this.case.raisedAmount / this.case.goalAmount) * 100, 100);
  }

}
