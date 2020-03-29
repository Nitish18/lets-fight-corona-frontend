import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-raise-request-medicines',
  templateUrl: './raise-request-medicines.component.html',
  styleUrls: ['./raise-request-medicines.component.css']
})
export class RaiseRequestMedicinesComponent implements OnInit {

  medicineRequestForm = new FormGroup({
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
    alert(this.medicineRequestForm.value);
  }

  ngOnInit(): void {
  }

}
