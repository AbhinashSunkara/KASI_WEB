import { Component } from '@angular/core';

@Component({
  selector: 'app-values',
  standalone: false,
  templateUrl: './values.html',
  styleUrl: './values.css',
})
export class Values {

  items = [
    {
      title: 'Transparency',
      description: 'Every donation is tracked and visible to ensure full accountability.',
      icon: '💡'
    },
    {
      title: 'Speed',
      description: 'Urgent cases are prioritized and processed quickly to save lives.',
      icon: '⚡'
    },
    {
      title: 'Trust',
      description: 'All cases are verified to maintain credibility and donor confidence.',
      icon: '🛡️'
    }
  ];

}
