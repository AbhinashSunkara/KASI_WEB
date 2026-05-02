import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: false,
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {

  stats = [
  {
    label: 'Total Requests',
    value: '120',
    change: '+12%',
    trend: 'up',
    bg: 'bg-blue-50',
    text: 'text-blue-600'
  },
  {
    label: 'Pending',
    value: '25',
    change: '+3%',
    trend: 'up',
    bg: 'bg-yellow-50',
    text: 'text-yellow-600'
  },
  {
    label: 'Approved',
    value: '80',
    change: '+10%',
    trend: 'up',
    bg: 'bg-green-50',
    text: 'text-green-600'
  },
  {
    label: 'Rejected',
    value: '15',
    change: '-5%',
    trend: 'down',
    bg: 'bg-red-50',
    text: 'text-red-600'
  }
];

}