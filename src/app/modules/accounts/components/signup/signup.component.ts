import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/modules/shared/validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.signupForm = this.formBuilder.group({
      userName: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      emailId: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(8), CustomValidators.StrongPassword])
    })
  }

  ngOnInit(): void {
  }

  getSignupFormGroup() {
    return this.signupForm;
  }

  getUserNameControl() {
    return this.getSignupFormGroup().controls['userName'];
  }

  getEmailIdControl() {
    return this.getSignupFormGroup().controls['emailId'];
  }

  getPasswordControl() {
    return this.getSignupFormGroup().controls['password'];
  }

}
