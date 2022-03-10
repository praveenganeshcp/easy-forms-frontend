import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreAppShellComponent } from './core-app-shell.component';

describe('CoreAppShellComponent', () => {
  let component: CoreAppShellComponent;
  let fixture: ComponentFixture<CoreAppShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreAppShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreAppShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
