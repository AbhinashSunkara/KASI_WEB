import { Component } from '@angular/core';
import { CampaignApiService } from '../../../services/campaign-api.service';

@Component({
  selector: 'app-stepper',
  standalone: false,
  templateUrl: './stepper.html',
  styleUrl: './stepper.css'
})
export class Stepper {

  patientData: any;
  medicalData: any;
  documents: any[] = [];

  currentStep = 0;
  showDocumentError = false;
  loading = false;

  steps = ['Patient Info', 'Medical Info', 'Documents', 'Review'];

  constructor(private campaignApi: CampaignApiService) {}

  goToStep(index: number) {
    this.currentStep = index;
  }

  next() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prev() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  handleNext(data: any) {
    if (this.currentStep === 0) this.patientData = data;
    if (this.currentStep === 1) this.medicalData = data;

    this.next();
  }

  handleDocuments(files: any[]) {
    this.documents = files;
    this.next();
  }

  async submitAll() {

    if (!this.documents || this.documents.length === 0) {
      this.showDocumentError = true;
      return;
    }

    this.loading = true;

    const payload = {
      title: this.medicalData.condition,
      story: this.medicalData.description,
      goalAmount: this.medicalData.estimatedCost,

      patient: this.patientData,
      medical: this.medicalData,
      documents: this.documents
    };

    try {
      const res = await this.campaignApi.create(payload);
      console.log('Campaign Created:', res);

      alert('Campaign submitted successfully');
    } catch (err) {
      console.error(err);
      alert('Failed to create campaign');
    }

    this.loading = false;
  }

  canProceed(): boolean {
    if (this.currentStep === 0) return !!this.patientData;
    if (this.currentStep === 1) return !!this.medicalData;
    if (this.currentStep === 2) return this.documents.length > 0;
    return true;
  }
}