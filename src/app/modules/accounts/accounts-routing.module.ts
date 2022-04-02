import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AccountShellComponent } from './pages/account-shell/account-shell.component';

const routes: Routes = [
  {
    path: '',
    component: AccountShellComponent,
    children: [
      {
        path: 'login',
        component: SigninComponent,
      },
      {
        path: 'create-account',
        component: SignupComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
