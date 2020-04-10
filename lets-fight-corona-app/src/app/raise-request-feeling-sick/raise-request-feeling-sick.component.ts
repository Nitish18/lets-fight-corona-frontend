import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SendDataBackendService } from '../send-data-backend.service';

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
    requestCommentDetail: new FormControl(''),
  });

  City: any = ['Bengaluru', 'Delhi', 'Pune', 'Mumbai', 'Jaipur', 'Chennai', 'Hyderabad', 'Ahmedabad']

  constructor(private sendDataToBackendService: SendDataBackendService) { }

  be_response: any;
  error: any;

  onSubmit() {
    this.be_response = "";
    this.error = "";
    var request_payload = {
        'name': this.feelingSickRequestForm.getRawValue().name,
        'address': this.feelingSickRequestForm.getRawValue().address,
        'city': this.feelingSickRequestForm.getRawValue().city,
        'pin_code': this.feelingSickRequestForm.getRawValue().pincode,
        'phone_number': this.feelingSickRequestForm.getRawValue().phoneNumber,
        'feeling_sick_detail': this.feelingSickRequestForm.getRawValue().requestCommentDetail,
        'feeling_sick': true,
        'request_type': "feeling_sick"
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
