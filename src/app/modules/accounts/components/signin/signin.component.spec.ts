import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let fixture: ComponentFixture<SigninComponent>;
  let component: SigninComponent;
  let template: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninComponent, ]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    template = fixture.debugElement;
  })

  function getElement(queryString: string) {
    return template.query(By.css(queryString)).nativeElement;
  }

  it('should render signin form title', () => {
    let formTitle: HTMLHeadingElement = getElement('.login__form h2');
    expect(formTitle).toBeInstanceOf(HTMLHeadingElement);
    expect(formTitle.innerHTML).toBe('SIGN-IN');
  })

  it('should render input field to specify email', () => {
    let emailField: HTMLInputElement = getElement(".login__form input[name='email']");
    expect(emailField).toBeInstanceOf(HTMLInputElement);
  })

  it('should render input field to specify password', () => {
    let passwordField: HTMLInputElement = getElement(".login__form input[name='password']");
    expect(passwordField).toBeInstanceOf(HTMLInputElement);
  })

  it('should render button to perform login action', () => {
    let loginBtn: HTMLButtonElement = getElement('.login__form button');
    expect(loginBtn).toBeInstanceOf(HTMLButtonElement);
    expect(loginBtn.innerText).toBe('LOGIN');
  })

  it('should provide link to forgot password', () => {
    let forgotPasswordLink: HTMLAnchorElement = getElement('.forgot-password-link');
    expect(forgotPasswordLink).toBeInstanceOf(HTMLAnchorElement);
    expect(forgotPasswordLink.getAttribute('routerLink')).toBe('/accounts/forgot-password');
  })

  it('should provide link to signup page', () => {
    let signinPageLink: HTMLAnchorElement = getElement('.redirect-action-link a');
    expect(signinPageLink).toBeInstanceOf(HTMLAnchorElement);
    expect(signinPageLink.getAttribute('routerLink')).toBe('/accounts/create-account');
  })

});
