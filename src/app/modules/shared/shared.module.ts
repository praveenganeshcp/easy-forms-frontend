import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { CommonService } from './services/common/common.service';
import { WarningPromptComponent } from './components/warning-prompt/warning-prompt.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormFieldComponent,
    WarningPromptComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [CommonService],
  exports: [MatIconModule, FormFieldComponent, ReactiveFormsModule],
})
export class SharedModule { }
