import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user';

@Injectable()
export class AccountService {

  private loggedInUser: User | null;

  constructor() { }

  login(mailId: string, password: string): Observable<User | null> {
    return of(null);
  }

  signup(userName: string, mailId: string, password: string): Observable<User | null> {
    return of(null);
  }

  sendPasswordResetLink(mailId: string): Observable<boolean> {
    return of(true);
  } 

  saveNewPassword(token: string, newPassword: string, newConfirmPassword: string): Observable<boolean> {
    return of(true);
  }

  logout() {

  }

  isUserAuthenticated(): boolean {
    return true;
  }

  getLoggedInUser(): User | null {
    return null;
  }
}
