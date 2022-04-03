import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { CommonService } from './services/common/common.service';


@NgModule({
  declarations: [
    FormFieldComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  providers: [CommonService],
  exports: [MatIconModule, FormFieldComponent],
})
export class SharedModule { }
