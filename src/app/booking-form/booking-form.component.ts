import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})

export class BookingFormComponent implements OnInit {
  bookingForm!: FormGroup;
  roomTypes: string[] = ['Standard', 'Deluxe', 'Suite', 'Family Room'];
  files: File[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      location: ['', [Validators.required, this.locationValidator]],
      file: [null, Validators.required],
      checkinDate: ['', Validators.required],
      checkoutDate: ['', Validators.required],
      numberOfAdults: [1, [Validators.required, Validators.min(1)]],
      numberOfChildren: [0, Validators.min(0)]
      // Add other form controls as needed
    });
  }

  locationValidator(control: FormGroup) {
    const locationValue = control.value;
    if (locationValue === 'Select Location') {
      return { locationError: true };
    }
    return null;
  }

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  updateCheckOutMinDate() {
    if (this.bookingForm.value.checkoutDate < this.bookingForm.value.checkinDate) {
      this.bookingForm.patchValue({
        checkoutDate: this.bookingForm.value.checkinDate
      });
    }
  }

  calculateDuration(): number {
    const checkin = new Date(this.bookingForm.value.checkinDate);
    const checkout = new Date(this.bookingForm.value.checkoutDate);
    const diffTime = Math.abs(checkout.getTime() - checkin.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  isValidDateRange(): boolean {
    return new Date(this.bookingForm.value.checkoutDate) > new Date(this.bookingForm.value.checkinDate);
  }

  increment(controlName: string) {
    const currentValue = this.bookingForm.value[controlName];
    this.bookingForm.patchValue({
      [controlName]: currentValue + 1
    });
  }

  decrement(controlName: string) {
    const currentValue = this.bookingForm.value[controlName];
    if (currentValue > 0) {
      this.bookingForm.patchValue({
        [controlName]: currentValue - 1
      });
    }
  }

  submitForm(form: NgForm): void {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    } else {
      console.log('Form is invalid.');
    }
  }

  showAlert(): void {
    alert('Form has been submitted!');
  }
}
