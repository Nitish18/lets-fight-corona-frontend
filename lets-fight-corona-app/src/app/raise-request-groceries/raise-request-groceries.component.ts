import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SendDataBackendService } from '../send-data-backend.service';

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
    personRequestType: new FormControl(''),
    requestCommentDetail: new FormControl(''),
  });

  City: any = ['Select City', 'Bengaluru', 'Delhi', 'Pune', 'Mumbai', 'Jaipur', 'Chennai', 'Hyderabad', 'Ahmedabad']

  constructor(private sendDataToBackendService: SendDataBackendService) { }

  be_response: any;
  error: any;

  onSubmit() {
    this.be_response = "";
    this.error = "";
    var request_payload = {
        'name': this.groceryRequestForm.getRawValue().name,
        'address': this.groceryRequestForm.getRawValue().address,
        'city': this.groceryRequestForm.getRawValue().city,
        'pin_code': this.groceryRequestForm.getRawValue().pincode,
        'phone_number': this.groceryRequestForm.getRawValue().phoneNumber,
        'no_of_people': this.groceryRequestForm.getRawValue().peopleCount,
        'food_grocery_type': this.groceryRequestForm.getRawValue().personRequestType,
        'food_grocery_type_detail': this.groceryRequestForm.getRawValue().requestCommentDetail,
        'request_type': "food_grocery"
    };
    this.sendDataToBackendService.sendDataToBackend(request_payload)
    .subscribe(
       data => console.log('success', data),
       error => console.log('oops', error)
    );
  }

  ngOnInit(): void {
  }

}
