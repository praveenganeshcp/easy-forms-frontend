import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ForgotPasswordComponent } from './forgot-password.component';

describe('ForgotPasswordComponent', () => {

  let fixture: ComponentFixture<ForgotPasswordComponent>;
  let component: ForgotPasswordComponent;
  let template: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasswordComponent, ],
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    template = fixture.debugElement;
  })

  function getElement(queryString: string) {
    return template.query(By.css(queryString)).nativeElement;
  }

  it('should render forgot password form title', () => {
    const formTitleElement: HTMLHeadingElement = getElement('.forgot-password__form h2');
    expect(formTitleElement).toBeInstanceOf(HTMLHeadingElement);
    expect(formTitleElement.innerText).toBe('FORGOT PASSWORD');
  })

  it('should render input field to specify registered mail id', () => {
    const mailIdField: HTMLInputElement = getElement(".forgot-password__form input[name='registeredMailId']");
    expect(mailIdField).toBeInstanceOf(HTMLInputElement);
  })

  it('should render button to perform send password reset link action to input mailid', () => {
    const sendLinkButton: HTMLButtonElement = getElement('.forgot-password__form button');
    expect(sendLinkButton).toBeInstanceOf(HTMLButtonElement);
    expect(sendLinkButton.innerText).toBe('SEND PASSWORD-RESET LINK');
  })

  it('should render link to signup page', () => {
    const signupLink: HTMLAnchorElement = getElement('.forgot-password__form a');
    expect(signupLink.getAttribute('routerLink')).toBe('/accounts/create-account');
  })
});
