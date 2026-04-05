import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-info',
  standalone: false,
  templateUrl: './patient-info.html',
  styleUrl: './patient-info.css',
})
export class PatientInfo implements OnInit {
  @Input() initialData: any;
  @Output() nextStep = new EventEmitter<any>();
  
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      gender: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      city: ['', Validators.required]
    });

    if (this.initialData) {
    this.form.patchValue(this.initialData);
  }
  }

  submit() {
    if (this.form.valid) {
      this.nextStep.emit(this.form.value);
      console.log('Patient Info:', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  get f() {
    return this.form.controls;
  }

}