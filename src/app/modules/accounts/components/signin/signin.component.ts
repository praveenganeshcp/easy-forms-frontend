import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/modules/shared/validators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  private loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      mailId: this.formBuilder.control('', [ Validators.required, Validators.email ]),
      password: this.formBuilder.control('', [ Validators.required, Validators.minLength(8), CustomValidators.StrongPassword ])
    })
  }

  ngOnInit(): void {
  }

  getLoginForm() {
    return this.loginForm;
  }

  getMaidIdControl() {
    return this.getLoginForm().controls['mailId'];
  }

  getPasswordControl() {
    return this.getLoginForm().controls['password'];
  }

}
