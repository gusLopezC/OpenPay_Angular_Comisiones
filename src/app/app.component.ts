import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OpenPayControllerService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OpenPayAngular';


  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private _serviceOpenpay: OpenPayControllerService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      MERCHANT_ID: ['', Validators.required],
      SECRECT_API_KEY: ['', Validators.required],
      customer_id: ['', Validators.required],
      monto: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log(this.registerForm.value)
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

    this._serviceOpenpay.cobrarComision(this.registerForm.value)
    .subscribe((resp: any) => {
      console.log(resp);
      if (resp > 0) {
        console.log(resp)
      } else {
        console.log(resp)

      }

    });

    }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
