import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  
  reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    })
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  // formEmail: string = '';

  // submitForm(form: NgForm) {
  //   console.log(form);
  //   // this.formEmail = form.value.email;
  //   form.reset();
  // }
}
