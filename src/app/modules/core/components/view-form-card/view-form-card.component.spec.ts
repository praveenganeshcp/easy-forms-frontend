import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFormCardComponent } from './view-form-card.component';

describe('ViewFormCardComponent', () => {
  let component: ViewFormCardComponent;
  let fixture: ComponentFixture<ViewFormCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFormCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
