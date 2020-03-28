import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCollabComponent } from './contact-collab.component';

describe('ContactCollabComponent', () => {
  let component: ContactCollabComponent;
  let fixture: ComponentFixture<ContactCollabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCollabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCollabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
