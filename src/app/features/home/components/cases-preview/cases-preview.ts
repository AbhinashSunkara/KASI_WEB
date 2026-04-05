import { Component } from '@angular/core';

@Component({
  selector: 'app-cases-preview',
  standalone: false,
  templateUrl: './cases-preview.html',
  styleUrl: './cases-preview.css',
})
export class CasesPreview {

  cases = [
    {
      name: 'Aarav Sharma',
      condition: 'Heart Surgery',
      hospital: 'Apollo Hospital',
      raised: 450000,
      goal: 800000
    },
    {
      name: 'Meera Reddy',
      condition: 'Cancer Treatment',
      hospital: 'KIMS Hospital',
      raised: 620000,
      goal: 900000
    },
    {
      name: 'Rahul Verma',
      condition: 'Kidney Transplant',
      hospital: 'AIIMS',
      raised: 300000,
      goal: 700000
    }
  ];

  getProgress(raised: number, goal: number): number {
    return Math.min((raised / goal) * 100, 100);
  }

}