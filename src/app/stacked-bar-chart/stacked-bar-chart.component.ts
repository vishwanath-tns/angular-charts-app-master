import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.css']
})
export class StackedBarChartComponent {

  constructor() { }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Inspection', 'Preventive', 'Corrective', 'Reactive'];
  barChartType: ChartType = 'horizontalBar';
  barChartLegend = true;
  barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Priority Low', stack: 'a' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Priority Medium', stack: 'a' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Priority High', stack: 'a' },
    { data: [28, 58, 50, 59, 66, 87, 90], label: 'Priority Highest', stack: 'a' }
  ];
}
