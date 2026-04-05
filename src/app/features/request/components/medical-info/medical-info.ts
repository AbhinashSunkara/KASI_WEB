import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-medical-info',
  standalone: false,
  templateUrl: './medical-info.html',
  styleUrl: './medical-info.css',
})
export class MedicalInfo implements OnInit {

  form!: FormGroup;
  @Input() initialData: any;
  @Output() nextStep = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      condition: ['', Validators.required],
      hospital: ['', Validators.required],
      doctor: [''],
      estimatedCost: ['', [Validators.required, Validators.min(1000)]],
      description: ['', Validators.required]
    });

    if (this.initialData) {
    this.form.patchValue(this.initialData);
  }
  }

  submit() {
    if (this.form.valid) {
      this.nextStep.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  get f() {
    return this.form.controls;
  }
}