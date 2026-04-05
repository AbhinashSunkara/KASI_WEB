import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  stats = [
    {
      value: '1,200+',
      label: 'Patients Helped'
    },
    {
      value: '$4.2M',
      label: 'Funds Raised'
    },
    {
      value: '98%',
      label: 'Verification Rate'
    }
  ];
}
