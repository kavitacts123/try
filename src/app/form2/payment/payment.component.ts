import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentMethods: string[] = ['Credit Card', 'PayPal', 'Bank Transfer'];
  selectedPaymentMethod: string = '';
  selectedBookingType: string = '';
  selectedPrice: number | undefined;
  totalPrice: number = 0;
  bookingTypes = [
    { id: 1, name: 'Standard', price: 1000 },
    { id: 2, name: 'Deluxe', price: 1500 },
    { id: 3, name: 'Suite', price: 2000 },
    { id: 4, name: 'Family Room', price: 2500 }
  ];
  interests = [
    { id: 1, name: 'Breakfast', price: 100, selected: false },
    { id: 2, name: 'Laundry Services', price: 200, selected: false },
    { id: 3, name: 'Spa Package', price: 300, selected: false },
  ];

  constructor() {}

  submitForm(form: NgForm) {
    if (form.valid && this.selectedPaymentMethod !== '') {
      console.log('Form submitted successfully!', form.value);
      form.resetForm();
      this.showAlert();
    } else {
      console.error('Form is invalid or no payment method selected');
    }
  }

  showAlert() {
    alert('Form submitted successfully!');
  }

  updatePriceList() {
    this.selectedPrice = this.bookingTypes.find(type => type.name === this.selectedBookingType)?.price;
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    let basePrice = this.selectedPrice || 0;
    let additionalCosts = this.interests.filter(interest => interest.selected).reduce((total, interest) => total + interest.price, 0);
    this.totalPrice = basePrice + additionalCosts;
  }

  isValidDateRange(): boolean {
    return true; // Replace with actual date validation logic if needed
  }
}