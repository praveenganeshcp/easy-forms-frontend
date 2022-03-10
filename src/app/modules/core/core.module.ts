import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { FormListComponent } from './pages/form-list/form-list.component';
import { CoreAppShellComponent } from './components/core-app-shell/core-app-shell.component';
import { TrashComponent } from './pages/trash/trash.component';
import { FormBuilderComponent } from './pages/form-builder/form-builder.component';
import { ViewFormResponseComponent } from './pages/view-form-response/view-form-response.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { ViewFormCardComponent } from './components/view-form-card/view-form-card.component';
import { CreateFormCardComponent } from './components/create-form-card/create-form-card.component';
import { TrashedFormCardComponent } from './components/trashed-form-card/trashed-form-card.component';
import { GlobalFormPropsComponent } from './components/global-form-props/global-form-props.component';


@NgModule({
  declarations: [
    FormListComponent,
    CoreAppShellComponent,
    TrashComponent,
    FormBuilderComponent,
    ViewFormResponseComponent,
    AppHeaderComponent,
    ViewFormCardComponent,
    CreateFormCardComponent,
    TrashedFormCardComponent,
    GlobalFormPropsComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
