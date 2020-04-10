import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SendDataBackendService } from '../send-data-backend.service';

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
        'name': this.medicineRequestForm.getRawValue().name,
        'address': this.medicineRequestForm.getRawValue().address,
        'city': this.medicineRequestForm.getRawValue().city,
        'pin_code': this.medicineRequestForm.getRawValue().pincode,
        'phone_number': this.medicineRequestForm.getRawValue().phoneNumber,
        'no_of_people': this.medicineRequestForm.getRawValue().peopleCount,
        'medicine_request_detail': this.medicineRequestForm.getRawValue().requestCommentDetail,
        'request_type': "medicine"
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
