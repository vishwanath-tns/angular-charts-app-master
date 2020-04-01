import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { ILeapApiService } from '../i-leap-api.service';
import { TechnicianWO } from '../../shared/models/TechnicianWO.model';
import { Color, Label } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})



export class BarChartComponent implements OnInit {
  BarChart = [];
  barChartTechnicianWO: TechnicianWO[] = [];
  chartLabels: string[] = [];
  chartData: number[] = [];
  chartBarColors: string[] = [];
  barColors: string[] = [
                          'rgba(0,102,204,1)',
                          'rgba(22,231,207,1)',
                          'rgba(112,56,147,1)',
                          'rgba(178,146,40,1)',
                          'rgba(174,25,109,1)',
                          'rgba(204,0,0,1)',
                          'rgba(255,0,0,0.2)',
                          'rgba(0,102,0,1)',
                          'rgba(51,0,0,1)',
                          'rgba(204,0,0,1)',
                      ];

  constructor(private ileapService: ILeapApiService) {
    console.log('Constructor');
    
    ileapService.get().subscribe(
      (vs: TechnicianWO[]) => {
        // console.log(' Bar Number ', vs);
        this.barChartTechnicianWO = vs;
        let barNo = 0;
        this.barChartTechnicianWO.forEach((element) => {
          console.log('Name', element.TechnicianNameList);
          console.log('Wo', element.NWO);
          this.chartLabels.push(element.TechnicianNameList);
          this.chartData.push(element.NWO);
          this.chartBarColors.push(this.getRandomColor(barNo));
          barNo = barNo + 1;
        }
        );
        this.InitializeChart();
      },
      error => console.log('Could not load objects.')
      );
  }

  getRandomColor(barNumber: number) {
    if (barNumber < 10) {
      return this.barColors[barNumber];
    } else {
      var color = Math.floor(0x1000000 * Math.random()).toString(16);
      return '#' + ('000000' + color).slice(-6);
    }
    
  }

  InitializeChart(): void {
    
    console.log('ngOnInit');
    // console.log('bar chart labels',this.chartLabels);
    this.BarChart.push(new Chart('barChart', {
      type: 'bar',
    data: {
     labels: this.chartLabels,
     datasets: [{
        //  label: 'Maintenance WorkLoad',
         data: this.chartData,
         backgroundColor: this.chartBarColors,
        //  backgroundColor: [
        //      'rgba(255, 99, 132, 1)',
        //      'rgba(54, 162, 235, 1)',
        //      'rgba(255, 206, 86, 1)',
        //      'rgba(75, 192, 192, 1)',
        //      'rgba(153, 102, 255, 1)',
        //      'rgba(255, 159, 64, 1)'
        //  ],
        borderColor: this.chartBarColors,
        //  borderColor: [
        //      'rgba(255,99,132, 1)',
        //      'rgba(54, 162, 235, 1)',
        //      'rgba(255, 206, 86, 1)',
        //      'rgba(75, 192, 192, 1)',
        //      'rgba(153, 102, 255, 1)',
        //      'rgba(255, 159, 64, 1)'
        //  ],
         borderWidth: 1
     }]
    }, 
    options: {
     title:{
         text:"MAINTENANCE WORK LOAD",
         display: true,
         fontColor: 'rgb(0, 0, 0)',
         fontSize: 10
     },
     legend: {
      display: false,
        labels: {
            fontColor: 'rgb(0, 0, 0)',
            fontSize: 10
        }
      },
     responsive: true,
    maintainAspectRatio: true,
     scales: {
          xAxes: [{
            ticks: {
              fontColor: 'black',
              display: true,
              fontSize: 10
            }
        }],
         yAxes: [{
             ticks: {
                 beginAtZero: true,
                 fontColor: 'rgb(0, 0, 0)',
                 fontSize: 10
             },
         }
        ]
     }
    }
    }));
  }
  ngOnInit(): void {
    Chart.plugins.unregister(ChartDataLabels);
  }
}
