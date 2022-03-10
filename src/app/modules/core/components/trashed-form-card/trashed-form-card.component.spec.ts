import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashedFormCardComponent } from './trashed-form-card.component';

describe('TrashedFormCardComponent', () => {
  let component: TrashedFormCardComponent;
  let fixture: ComponentFixture<TrashedFormCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashedFormCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashedFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
