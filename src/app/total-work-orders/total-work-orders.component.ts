import { Component, OnInit } from '@angular/core';
import { ILeapApiService } from '../i-leap-api.service';

@Component({
  selector: 'app-total-work-orders',
  templateUrl: './total-work-orders.component.html',
  styleUrls: ['./total-work-orders.component.css']
})
export class TotalWorkOrdersComponent implements OnInit {

  public values: number[] = [];
  public totalWorkOrders: number;
  constructor(private ileapService: ILeapApiService) {
  ileapService.getTotalWorkOrders().subscribe(
    (vs: number) => {
      console.log(' Total Work Orders ', vs);
      this.totalWorkOrders = vs;
    },
    error => console.log('Could not load objects.')
    );
  }

  ngOnInit() {
  }

}
