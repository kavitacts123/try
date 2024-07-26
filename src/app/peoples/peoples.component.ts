import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrl: './peoples.component.css'
})
export class PeoplesComponent implements OnInit  {
  personForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.personForm = this.fb.group({
      persons: this.fb.array([
        this.createPersonFormGroup()
      ])
    });
  }

  createPersonFormGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  get personsArray() {
    return this.personForm.get('persons') as FormArray;
  }

  addPerson() {
    this.personsArray.push(this.createPersonFormGroup());
  }

  removePerson(index: number) {
    this.personsArray.removeAt(index);
  }

  onSubmit() {
    // Handle form submission here
    if (this.personForm.valid) {
      console.log(this.personForm.value);
      // You can submit the form data to your backend or perform any other action
    } else {
      // Form is invalid, handle validation errors
    }
  }
}