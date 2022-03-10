import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFormResponseComponent } from './view-form-response.component';

describe('ViewFormResponseComponent', () => {
  let component: ViewFormResponseComponent;
  let fixture: ComponentFixture<ViewFormResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFormResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFormResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
