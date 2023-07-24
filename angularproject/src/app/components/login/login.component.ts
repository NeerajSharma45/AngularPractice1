import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formEmail: string = '';

  submitForm(form: NgForm) {
    console.log(form);
    // this.formEmail = form.value.email;
    form.reset();
  }
}
