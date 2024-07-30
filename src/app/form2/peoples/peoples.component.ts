import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms'; // Import AbstractControl
import { Router } from '@angular/router';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {
  personForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.personForm = this.fb.group({
      persons: this.fb.array([this.createPerson()])
    });
  }

  get personsArray(): FormArray {
    return this.personForm.get('persons') as FormArray;
  }

  createPerson(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      document: [null, Validators.required] // Initialize as null for file handling
    });
  }

  addPerson(): void {
    this.personsArray.push(this.createPerson());
  }

  removePerson(index: number): void {
    this.personsArray.removeAt(index);
  }

  onSubmit(): void {
    if (this.personForm.valid) {
      // Create FormData object for file uploads
      const formData = new FormData();
      this.personsArray.controls.forEach((control: AbstractControl) => {
        const person = control.value;
        formData.append('firstName', person.firstName);
        formData.append('lastName', person.lastName);
        formData.append('age', person.age);
        if (person.document) {
          formData.append('document', person.document);
        }
      });

      // For demonstration purposes, log the FormData object
      console.log('Form submitted with data:', formData);

      // Navigate to the next route
      this.router.navigate(['/form2/rooms']);
    } else {
      // Mark all controls as touched to display validation messages
      this.personForm.markAllAsTouched();
    }
  }
}
