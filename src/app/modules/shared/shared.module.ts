import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormFieldComponent } from './components/form-field/form-field.component';


@NgModule({
  declarations: [
    FormFieldComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [MatIconModule, FormFieldComponent]
})
export class SharedModule { }
