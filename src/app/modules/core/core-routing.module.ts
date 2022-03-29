import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreAppShellComponent } from './components/core-app-shell/core-app-shell.component';
import { FormListComponent } from './pages/form-list/form-list.component';

const routes: Routes = [
  {
    path: '',
    component: CoreAppShellComponent,
    children: [
      {
        path: 'forms',
        component: FormListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
