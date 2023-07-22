import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  formData = {
    name: '',
    email: '',
    number: '',
    password: ''
  };

  submitForm() {
    if(this.isLogin)
    alert("You are Logged In");
    else
    alert("You are signed up");
  }
  isLogin:boolean=true;
  form_name:String="Login";
  login(){
    this.isLogin=true;
    this.form_name="Login";
    console.log(this.form_name);
  }
  signUp(){
    this.isLogin=false;
    this.form_name="SignUp";
    console.log(this.form_name);
  }
}
