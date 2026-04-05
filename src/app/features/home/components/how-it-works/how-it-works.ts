import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  standalone: false,
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css',
})
export class HowItWorks {

  steps = [
    {
      title: 'Submit Request',
      description: 'Patients or families submit medical funding requests with required details.',
      icon: '📝'
    },
    {
      title: 'Verification',
      description: 'Our team reviews and verifies documents to ensure authenticity.',
      icon: '🔍'
    },
    {
      title: 'Receive Support',
      description: 'Verified cases are published and receive donations from supporters.',
      icon: '❤️'
    }
  ];

}