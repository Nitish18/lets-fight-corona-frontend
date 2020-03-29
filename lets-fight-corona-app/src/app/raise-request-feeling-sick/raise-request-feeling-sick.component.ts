import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-raise-request-feeling-sick',
  templateUrl: './raise-request-feeling-sick.component.html',
  styleUrls: ['./raise-request-feeling-sick.component.css']
})
export class RaiseRequestFeelingSickComponent implements OnInit {

  feelingSickRequestForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    pincode: new FormControl(''),
    phoneNumber: new FormControl(''),
    peopleCount: new FormControl(''),
  });

  City: any = ['Bengaluru', 'Delhi', 'Pune', 'Mumbai', 'Jaipur', 'Chennai', 'Hyderabad', 'Ahmedabad']

  constructor() { }

  onSubmit() {
    alert(this.feelingSickRequestForm.value);
  }

  ngOnInit(): void {
  }

}
