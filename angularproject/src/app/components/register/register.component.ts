import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  hide: boolean = true;
  reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      mobile: new FormControl(null, [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
      password: new FormControl(null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
    })
  }
  
  onSubmit() {
    console.log(this.reactiveForm.value.name);
    console.log(this.reactiveForm.value.mobile);
    console.log(this.reactiveForm.value.email);
    console.log(this.reactiveForm.value.password);
  }
}
