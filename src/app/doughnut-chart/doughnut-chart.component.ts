import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { MultiDataSet, Label } from 'ng2-charts';
import { ILeapApiService } from '../i-leap-api.service';
import { WOStatus } from '../../shared/models/WOStatus.model';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})

export class DoughnutChartComponent {

  PieChart = [];
  chartWorkOrderStatus: WOStatus[] = [];
  statusList = [];
  wolist = [];
  chartBarColors: string[] = [];

  constructor(private ileapService: ILeapApiService) {
    ileapService.getWorkStatus().subscribe(
      (vs: WOStatus[]) => {
        this.chartWorkOrderStatus = vs;
        console.log(' Status Values ', this.chartWorkOrderStatus);
        this.chartWorkOrderStatus.forEach((element) => {
          // console.log('Name', element.Status);
          // console.log('Wo', element.NWO);
          if (element.Status != null) {
            this.statusList.push(element.Status);
            this.wolist.push(element.NWO);
            this.chartBarColors.push(this.getRandomColor());
          }
        });
        this.InitializeChart();
      },
      error => console.log('Could not load objects.')
      );
        // this.chartWorkOrderStatus.forEach((element) => {
        //   console.log('Status', element.Status);
        //   console.log('Wo', element.NWO);
        //   // this.barChartLabels.push(element.TechnicianNameList);
        //   // this.wolist.push(element.NWO);
        // });
      
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  InitializeChart(): void {
    this.PieChart.push(new Chart('pieChart', {
      type: 'doughnut',
    data: {
    labels: this.statusList,
    datasets: [{
        label: '# of Votes',
        data: this.wolist,
        // backgroundColor: this.chartBarColors,
        // borderColor: this.chartBarColors,
        backgroundColor: [
            'rgba(178, 146, 40, 1)',
            'rgba(0, 152, 242, 1)',
            'rgba(112, 56, 147, 1)',
            'rgba(75, 192, 25, 1)',
            'rgba(153, 102, 25, 1)',
            'rgba(255, 159, 25, 1)'
        ],
        borderColor: [
          'rgba(178, 146, 40, 1)',
          'rgba(0, 152, 242, 1)',
          'rgba(112, 56, 147, 1)',
          'rgba(75, 192, 25, 1)',
          'rgba(153, 102, 25, 1)',
          'rgba(255, 159, 25, 1)'
        ],
        borderWidth: 1
    }]
    },
    plugins: [ChartDataLabels],
    options: {
      plugins: {
        // Change options for ALL labels of THIS CHART
        datalabels: {
            color: 'rgb(0, 0, 0)'
        }
    },
    title:{
        text: "Status of Work Orders",
        display: true,
        fontSize: 10,
        fontColor: 'rgb(0, 0, 0)'
        
    },
    legend: {
      display: true,
        labels: {
            fontColor: 'rgb(0, 0, 0)',
            fontSize: 10
        },
        position: 'bottom',

      },
      
    responsive: true,
    maintainAspectRatio: true,
    scales: {
        yAxes: [{
          gridLines: {
              display: false
            },
            ticks: {
              beginAtZero: false,
              display: false
            }
        }]
    }
    }
    }));

  }

}
