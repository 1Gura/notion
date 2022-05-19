import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTextFieldComponent } from './base-text-field.component';

describe('BaseTextFieldComponent', () => {
  let component: BaseTextFieldComponent;
  let fixture: ComponentFixture<BaseTextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseTextFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
