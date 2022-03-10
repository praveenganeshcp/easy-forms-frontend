import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFormPropsComponent } from './global-form-props.component';

describe('GlobalFormPropsComponent', () => {
  let component: GlobalFormPropsComponent;
  let fixture: ComponentFixture<GlobalFormPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalFormPropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalFormPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
