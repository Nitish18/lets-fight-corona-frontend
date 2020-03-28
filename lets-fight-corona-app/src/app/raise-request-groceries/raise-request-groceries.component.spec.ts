import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseRequestGroceriesComponent } from './raise-request-groceries.component';

describe('RaiseRequestGroceriesComponent', () => {
  let component: RaiseRequestGroceriesComponent;
  let fixture: ComponentFixture<RaiseRequestGroceriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiseRequestGroceriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseRequestGroceriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
