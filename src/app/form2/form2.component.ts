import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  currentStep = 1;
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      destination: this.fb.group({ name: [''] }),
      hotel_list: this.fb.group({ location: [''] }),
      date: this.fb.group({ travelDate: [''] }),
      rooms: this.fb.group({ method: [''] }),
      peoples: this.fb.group({ number: [''] }),
      payment: this.fb.group({ method: [''] })
    });
  }

  ngOnInit(): void {
    this.route.firstChild?.params.subscribe(params => {
      const step = params['step'];
      if (step) {
        this.currentStep = this.getStepNumber(step);
      }
    });
  }

  nextStep() {
    if (this.currentStep < 5) {
      this.currentStep++;
      this.router.navigate([`form2/${this.getStepPath(this.currentStep)}`]);
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.router.navigate([`form2/${this.getStepPath(this.currentStep)}`]);
    }
  }

  getStepPath(step: number): string {
    switch (step) {
      case 1: return 'destination';
      case 2: return 'hotel_list';
      case 3: return 'date';
      case 4: return 'rooms';
      case 5: return 'peoples';
      case 6: return 'payment';
      default: return '';
    }
  }

  getStepNumber(path: string): number {
    switch (path) {
      case 'destination': return 1;
      case 'hotel_list': return 2;
      case 'date': return 3;
      case 'rooms': return 4;
      case 'peoples': return 5;
      case 'payment': return 6;
      default: return 1;
    }
  }

  submit() {
    console.log(this.form.value);
    // Here you would usually submit the form data to a server
  }
}
