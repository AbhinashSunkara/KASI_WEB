import { Component } from '@angular/core';

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
  showDocumentError = false;
  currentStep = 0;

  steps = [
    'Patient Info',
    'Medical Info',
    'Documents',
    'Review'
  ];

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

  goToStep(index: number) {
    this.currentStep = index;
  }

  handleNext(data: any) {

    if (this.currentStep === 0) {
      this.patientData = data;
    }

    if (this.currentStep === 1) {
      this.medicalData = data;
    }

    this.next();
  }

  handleDocuments(files: any[]) {
    this.documents = files;
    this.next();
  }

  submitAll() {

  if (!this.documents || this.documents.length === 0) {
    this.showDocumentError = true;
    return;
  }

  this.showDocumentError = false;

  const payload = {
    patient: this.patientData,
    medical: this.medicalData,
    documents: this.documents
  };

  console.log('FINAL SUBMISSION:', payload);
}

canProceed(): boolean {

  if (this.currentStep === 0) {
    return !!this.patientData; // must be saved
  }

  if (this.currentStep === 1) {
    return !!this.medicalData;
  }

  if (this.currentStep === 2) {
    return this.documents && this.documents.length > 0;
  }

  return true;
}

}