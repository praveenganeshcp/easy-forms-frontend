import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PasswordResetComponent } from './password-reset.component';

describe('PasswordResetComponent', () => {
  let fixture: ComponentFixture<PasswordResetComponent>;
  let component: PasswordResetComponent;
  let template: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordResetComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordResetComponent);
    component = fixture.componentInstance;
    template = fixture.debugElement;
  })

  function getElement(queryString: string) {
    return template.query(By.css(queryString)).nativeElement;
  }

  it('should render password reset form title', () => {
    const formTitleElement: HTMLHeadingElement = getElement('.password-reset__form h2');
    expect(formTitleElement).toBeInstanceOf(HTMLHeadingElement);
    expect(formTitleElement.innerText).toBe('RESET PASSWORD');
  })

  it('should render input field to enter new password', () => {
    const passwordField: HTMLInputElement = getElement(".password-reset__form input[name='password']");
    expect(passwordField).toBeInstanceOf(HTMLInputElement);
  })

  it('should render input field to enter confirm new password', () => {
    const confirmPasswordField: HTMLInputElement = getElement(".password-reset__form input[name='confirmPassword']");
    expect(confirmPasswordField).toBeInstanceOf(HTMLInputElement);
  })

  it('should render button to perform save password action', () => {
    const saveButtonElement: HTMLButtonElement = getElement('.password-reset__form button');
    expect(saveButtonElement).toBeInstanceOf(HTMLButtonElement);
    expect(saveButtonElement.innerText).toBe('SAVE PASSWORD');
  })

  it('should render link to signup page', () => {
    const signupPageLink: HTMLAnchorElement = getElement('.password-reset__form p a');
    expect(signupPageLink).toBeInstanceOf(HTMLAnchorElement);
    expect(signupPageLink.getAttribute('routerLink')).toBe('/accounts/create-account');
  })
});
