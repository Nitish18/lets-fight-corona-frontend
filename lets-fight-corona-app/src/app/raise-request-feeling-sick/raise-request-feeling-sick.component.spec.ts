import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseRequestFeelingSickComponent } from './raise-request-feeling-sick.component';

describe('RaiseRequestFeelingSickComponent', () => {
  let component: RaiseRequestFeelingSickComponent;
  let fixture: ComponentFixture<RaiseRequestFeelingSickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiseRequestFeelingSickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseRequestFeelingSickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
