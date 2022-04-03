import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AccountShellComponent } from './pages/account-shell/account-shell.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { SharedModule } from '../shared/shared.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AccountService } from './services/account/account.service';
import { AccountDataSourceService } from './services/account-data-source/account-data-source.service';


@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    AccountShellComponent,
    ProfileComponent,
    PasswordResetComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccountsRoutingModule
  ],
  providers: [
    AccountService, AccountDataSourceService,
  ]
})
export class AccountsModule { }
