import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-raise-request-groceries',
  templateUrl: './raise-request-groceries.component.html',
  styleUrls: ['./raise-request-groceries.component.css']
})
export class RaiseRequestGroceriesComponent implements OnInit {

  groceryRequestForm = new FormGroup({
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
    alert(this.groceryRequestForm.value);
  }

  ngOnInit(): void {
  }

}
