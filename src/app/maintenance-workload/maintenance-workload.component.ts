import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { Chart } from 'chart.js';
import { ILeapApiService } from '../i-leap-api.service';
import { TechnicianWO } from '../../shared/models/TechnicianWO.model';

@Component({
  selector: 'app-maintenance-workload',
  templateUrl: './maintenance-workload.component.html',
  styleUrls: ['./maintenance-workload.component.css']
})
export class MaintenanceWorkloadComponent implements AfterViewInit  {
  chart: any;
  ctx: any;
  constructor(private ileapService: ILeapApiService) {
    // ileapService.get().subscribe(
    //   (vs: TechnicianWO[]) => {
    //     console.log(' Bar Number ', vs);
    //   },
    //   error => console.log('Could not load objects.')
    // );
  }

  ngAfterViewInit() {
    this.chart = document.getElementById('chartcanvas');
    console.log('chart ID', this.chart);
    this.ctx = this.chart.getContext('2d');

    this.chart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
      });
  }

}
