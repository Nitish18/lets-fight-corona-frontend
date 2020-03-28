import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseRequestMedicinesComponent } from './raise-request-medicines.component';

describe('RaiseRequestMedicinesComponent', () => {
  let component: RaiseRequestMedicinesComponent;
  let fixture: ComponentFixture<RaiseRequestMedicinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiseRequestMedicinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseRequestMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
