import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormCardComponent } from './create-form-card.component';

describe('CreateFormCardComponent', () => {
  let component: CreateFormCardComponent;
  let fixture: ComponentFixture<CreateFormCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFormCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
