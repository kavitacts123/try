import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: ''
  };

  constructor(private router: Router) {}

  submitForm(form: any) {
    if (form.valid) {
      // Form is valid, perform submission logic here
      console.log('Form submitted with data:', this.formData);

      // Example of navigating to the next step
      this.router.navigate(['/form2/hotel_list']); // Replace '/hotel_list' with your actual next step route
    } else {
      // Form is invalid, mark all fields as touched to display validation messages
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
    }
  }
}