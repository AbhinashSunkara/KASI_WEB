import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicalInfo } from './components/medical-info/medical-info';
import { Documents } from './components/documents/documents';
import { PatientInfo } from './components/patient-info/patient-info';
import { Stepper } from './components/stepper/stepper';
import { RequestPage } from './request-page/request-page';


@NgModule({
  declarations: [
    MedicalInfo,
    Documents,
    PatientInfo,
    Stepper,
    RequestPage
  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RequestModule { }
