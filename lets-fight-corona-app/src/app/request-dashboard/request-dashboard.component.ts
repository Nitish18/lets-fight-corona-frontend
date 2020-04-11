import { Component, OnInit } from '@angular/core';
import { SendDataBackendService } from '../send-data-backend.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-request-dashboard',
  templateUrl: './request-dashboard.component.html',
  styleUrls: ['./request-dashboard.component.css']
})
export class RequestDashboardComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'City';
  showYAxisLabel = true;
  yAxisLabel = 'Total open requests';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  
  constructor(private sendDataToBackendService: SendDataBackendService) {
    this.sendDataToBackendService.getDashboardDataFromBackend("city")
    .subscribe(
       data => this.func1(data),
       error => console.log('oops', error)
    );
   }

  func1(data){
    this.single = data.data
    Object.assign(this, this.single)
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
    
  }
}
