import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservedItemComponent } from './observed-item.component';

describe('ObservedItemComponent', () => {
  let component: ObservedItemComponent;
  let fixture: ComponentFixture<ObservedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
