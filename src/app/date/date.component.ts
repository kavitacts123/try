import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent {
  checkinDate: NgbDateStruct | null = null;
  checkoutDate: NgbDateStruct | null = null;
  dateForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private calendar: NgbCalendar) {
    this.dateForm = this.formBuilder.group({
      checkinDate: [null, Validators.required],
      checkoutDate: [null, Validators.required]
    }, { validator: this.dateValidator });
  }

  dateValidator(formGroup: FormGroup) {
    const checkin = formGroup.get('checkinDate')?.value as NgbDateStruct | null;
    const checkout = formGroup.get('checkoutDate')?.value as NgbDateStruct | null;

    // Check if either date is null
    if (!checkin || !checkout) {
      return null; // Let required validator handle null values
    }

    // Compare dates
    const checkinDate = new Date(checkin.year, checkin.month - 1, checkin.day);
    const checkoutDate = new Date(checkout.year, checkout.month - 1, checkout.day);

    if (checkoutDate <= checkinDate) {
      return { dateRangeInvalid: true };
    }

    return null;
  }

  submitForm(dateForm: NgForm) {
    if (dateForm.valid) {
      // Proceed with form submission logic
    }
  }
}