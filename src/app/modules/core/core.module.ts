import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { FormListComponent } from './pages/form-list/form-list.component';
import { CoreAppShellComponent } from './components/core-app-shell/core-app-shell.component';
import { TrashComponent } from './pages/trash/trash.component';
import { FormBuilderComponent } from './pages/form-builder/form-builder.component';
import { ViewFormResponseComponent } from './pages/view-form-response/view-form-response.component';


@NgModule({
  declarations: [
    FormListComponent,
    CoreAppShellComponent,
    TrashComponent,
    FormBuilderComponent,
    ViewFormResponseComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
