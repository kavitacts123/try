import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  checkinDate!: NgbDateStruct;
  checkoutDate!: NgbDateStruct;

  constructor(private router: Router) {}

  // Method to validate date range
  validateDateRange(form: NgForm): boolean {
    const checkin = this.checkinDate;
    const checkout = this.checkoutDate;

    if (checkin && checkout) {
      const checkinDate = new Date(checkin.year, checkin.month - 1, checkin.day);
      const checkoutDate = new Date(checkout.year, checkout.month - 1, checkout.day);

      if (checkoutDate <= checkinDate) {
        form.form.setErrors({ dateRangeInvalid: true });
        return false;
      }
    }
    return true;
  }

  // Method to handle form submission
  submitForm(form: NgForm): void {
    if (form.valid && this.validateDateRange(form)) {
      console.log('Form Submitted:', { checkinDate: this.checkinDate, checkoutDate: this.checkoutDate });
      // Navigate to the next route
      this.router.navigate(['/form2/peoples']);
    } else {
      console.log('Form is invalid');
    }
  }
}
