import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OpenPayControllerService } from './services/service.index';
import Swal from 'sweetalert2'


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
      environment: ['', Validators.required],
      MERCHANT_ID: ['', Validators.required],
      SECRECT_API_KEY: ['', Validators.required],
      customer_id: ['', Validators.required],
      monto: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success

    console.log();
    this._serviceOpenpay.cobrarComision(this.registerForm.value)
    .subscribe((resp: any) => {
      

      if (resp.status = "completed") {
        Swal.fire('Cobro de saldo realizado correctamente');
        this.registerForm.controls['customer_id'].patchValue('');
        this.registerForm.controls['monto'].patchValue('');
      } else {
        Swal.fire('Oops...', 'Hubo un error vuelve a intentar', 'error');
      }
    });

    }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
