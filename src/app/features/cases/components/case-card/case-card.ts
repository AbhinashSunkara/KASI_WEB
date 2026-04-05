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
    return Math.min((this.case.raised / this.case.goal) * 100, 100);
  }

}
