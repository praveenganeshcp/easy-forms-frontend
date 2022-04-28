import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ErrorKeys } from './form-field.types';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  @Input() labelName: string;
  @Input() iconName: string;
  @Input() formField: AbstractControl;
  @Input() id: string;
  constructor() { }

  ngOnInit(): void {
  }

  getLabelName() {
    return this.labelName;
  }

  getIconName() {
    return this.iconName;
  }

  getId() {
    return this.id;
  }

  getFormControl() {
    return this.formField;
  }

  getErrorMessageIfInvalid(): string {
    const formControl = this.getFormControl();
    if(formControl?.errors === null) {
      return '';
    }
    else {
      const firstErrorKey = Object.keys(formControl.errors)[0] as ErrorKeys;
      const errorMessage = formControl.errors[firstErrorKey];
      const errorMessages: Record<ErrorKeys, string> = {
        'maxlength': `Maximum length is ${errorMessage.requiredLength} characters`,
        'minlength': `Minimum length is ${errorMessage.requiredLength} characters`,
        'passwordConstraint': 'Atleast 8 characters required and Must contain 1 (A-Z, a-z, 0-9) character',
        'required': 'This is a required field',
        'email': 'Invalid email id'
      }
      return errorMessages[firstErrorKey] ? errorMessages[firstErrorKey] : 'Invalid value';
    }
  }

}
