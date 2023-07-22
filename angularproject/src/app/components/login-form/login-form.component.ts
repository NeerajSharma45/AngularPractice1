import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  reset(){
    this.formData.name='';
    this.formData.email='';
    this.formData.password='';
    this.formData.number='';
  }
  checkAllDetailsFilled():boolean{
    if(this.isLogin){
      if(this.formData.name!==''&&this.formData.email!==''&&this.formData.number!==''&&this.formData.password!=='')
      return false; 
      else
      return true;
    }
    else{
      if(this.formData.email!==''&&this.formData.password!=='')
      return false;
      else
      return true;
    }
  }
  submitForm(form:NgForm) {
    if(this.checkAllDetailsFilled()){
      alert("Please Enter all details");
      return;
    }
    if(this.isLogin)
    alert("You are Logged In");
    else
    alert("You are signed up");
    this.reset();
  }
  isLogin:boolean=true;
  form_name:String="Login";
  login(form:NgForm){
    this.reset();
    this.isLogin=true;
    this.form_name="Login";
  }
  signUp(form:NgForm){
    this.reset();
    this.isLogin=false;
    this.form_name="SignUp";
  }
}
