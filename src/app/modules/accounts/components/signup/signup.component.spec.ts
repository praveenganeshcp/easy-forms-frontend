import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let fixture: ComponentFixture<SignupComponent>;
  let component: SignupComponent;
  let template: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    template = fixture.debugElement;
  })

  function getElement(queryString: string) {
    return template.query(By.css(queryString)).nativeElement;
  }

  it('should render form title', () => {
    let formTitle: HTMLElement = getElement('.signin__form h2');
    expect(formTitle.innerText).toBe('CREATE ACCOUNT');
  })

  it('should render input field to specify user name', () => {
    let userNameField: HTMLInputElement = getElement(".signin__form input[type='text']");
    expect(userNameField).toBeInstanceOf(HTMLInputElement);
    expect(userNameField.name).toBe('userName');
  })

  it('should render input field to specify email-id', () => {
    let emailField: HTMLInputElement = getElement(".signin__form input[type='email']");
    expect(emailField).toBeInstanceOf(HTMLInputElement);
    expect(emailField.name).toBe('mailId');
  })

  it('should render input field to specify password', () => {
    let passwordField: HTMLInputElement = getElement(".signin__form input[type='password']");
    expect(passwordField).toBeInstanceOf(HTMLInputElement);
    expect(passwordField.name).toBe('password');
  })

  it('should render button to create the account', () => {
    let signinBtn: HTMLButtonElement = getElement('.signin__form button');
    expect(signinBtn).toBeInstanceOf(HTMLButtonElement);
    expect(signinBtn.innerText).toBe('CREATE ACCOUNT');
  })

  it('should render link to login page', () => {
    let loginPageLink: HTMLAnchorElement = getElement('.redirect-action-link a');
    expect(loginPageLink).toBeInstanceOf(HTMLAnchorElement);
    expect(loginPageLink.innerHTML).toBe('Login here');
  })

});
