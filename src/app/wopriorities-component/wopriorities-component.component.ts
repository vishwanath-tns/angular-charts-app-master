import { Component, OnInit } from '@angular/core';
import { Chart, ChartDataSets } from 'chart.js';
import { ILeapApiService } from '../i-leap-api.service';
import { TechnicianWO } from '../../shared/models/TechnicianWO.model';
import { StackedData } from '../../shared/models/StackedData.model';
import { WOPriority } from 'src/shared/models/WOPriority.model';
import { ChartData } from '../../shared/models/chartData.model';
import { MainCategory } from '../../shared/models/WOPriority.model';
import { element } from 'protractor';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-wopriorities-component',
  templateUrl: './wopriorities-component.component.html',
  styleUrls: ['./wopriorities-component.component.css']
})



export class WOPrioritiesComponentComponent implements OnInit {
  StackedBarChart = [];
  barChartTechnicianWO: TechnicianWO[] = [];
  chartLabels: string[] = [];
  chartData: ChartData[] = [];
  chartBarColors: string[] = [];
  public values: StackedData[] = [];
  public WOPriorities: WOPriority[] = [];
  barChartLabels: string[] = [];
  prioritylabels: string[] = [];
  mccategorys: MainCategory[] = [];
  // barColors: colorData[] = [
  //   {'Low': 'rgba(112,56,147,1)'},
  //   {'High': 'rgba(255,140,36,1)'},
  //   {'Medium': 'rgba(253,202,0,1)'},
  //   {'Highest': 'rgba(221,59,79,1)'},
  // ];
  staticColorLabels = ['#22aa99', '#994499', '#316395', '#316395', '#b82e2e', '#66aa00',
  '#dd4477', '#0099c6', '#990099', '#109618', '#109618', '#dc3912', '#3366cc'];

  constructor(private ileapService: ILeapApiService) {
    ileapService.getPriorities().subscribe((vs: WOPriority[]) => {
      console.log(' Stacked Data ', vs);
      Chart.plugins.unregister(ChartDataLabels);
      this.WOPriorities = vs;
      this.WOPriorities.forEach((element) => {
              // console.log('Name', element.TechnicianNameList);
              // console.log('Wo', element.NWO);
              const mcInc = this.barChartLabels.includes(element.MainCategory, 0);
              if (!mcInc) {
                this.barChartLabels.push(element.MainCategory);
              }
              
              const inc = this.prioritylabels.includes(element.Priority, 0);
              if (!inc) {
                if (element.Priority != null) {
                  this.prioritylabels.push(element.Priority);
                }
                
              }
      });
      console.log('All Priorities', this.prioritylabels);

      // group records by MainCategory
      this.barChartLabels.forEach((elementMC) => {

        const nc = new MainCategory();
        this.WOPriorities.forEach((element) => {
          if (element.MainCategory == elementMC) {
              nc.mcObjects.push(element);
          }
        });
        this.mccategorys.push(nc);
      });
      console.log('Catergory Group', this.mccategorys);

      this.prioritylabels.forEach((priority) => {
        const cd = new ChartData();
        cd.backgroundColor = this.getRandomColor(priority);
        cd.label = priority;
        cd.data = [];
        //this.barChartLabels.forEach((uniqueCat) => {
        this.mccategorys.forEach((catergoryGroup) => {
          let priorityFound = false;
          catergoryGroup.mcObjects.forEach((catergory) => {
            if ((catergory.Priority == priority)) {
              priorityFound = true;
              cd.data.push(catergory.PC);
            }
          });
          if (!priorityFound) {
            cd.data.push(0);
          }
        });
        //});
        this.chartData.push(cd);
      });
      this.InitializeChart();
    }
    );

  }
  getRandomColor(priority: string) {

    if (priority === 'Low') {
      return 'rgba(112,56,147,1)';
    } else if (priority === 'High') {
      return 'rgba(255,140,36,1)';
    } else if (priority === 'Medium') {
      return 'rgba(253,202,0,1)';
    } else if (priority === 'Highest') {
      return 'rgba(221,59,79,1)';
    } else {
      var color = Math.floor(0x1000000 * Math.random()).toString(16);
      return '#' + ('000000' + color).slice(-6);
    }
  }

  ngOnInit(): void {
    Chart.plugins.unregister(ChartDataLabels);
  }

  InitializeChart(): void {
    console.log('ngOnInit');
    // console.log('bar chart labels',this.chartLabels);
    this.StackedBarChart.push(new Chart('stackedbarChart', {
      type: 'horizontalBar',
    data: {
     labels: this.barChartLabels, //this.chartLabels,
     datasets: this.chartData
    }, 
    
    options: {
     title: {
         text:"Maintenance Priority by Type",
         display: true,
          fontSize: 10,
          fontColor: 'rgb(0, 0, 0)'

     },
     legend: {
      display: true,
      position: 'bottom',
        labels: {
            fontColor: 'rgb(0, 0, 0)',
            fontSize: 10
            
        }
      },
     responsive: true,
    maintainAspectRatio: true,
     scales: {
        xAxes: [{
          stacked: true,
          ticks: {
            fontColor: 'black',
            fontSize: 10
          }
        }],
        yAxes: [{
          stacked: true,
          ticks: {
            fontColor: 'black',
            fontSize: 10
          }
        }]
     }
    }
    }));
  }

}


// [{
//   label: 'Washing and cleaning',
//   data: [0, 8],
//   backgroundColor: '#22aa99','#994499','#316395','#316395','#b82e2e'
// }, {
//   label: 'Traffic tickets',
//   data: [0, 2],
//   backgroundColor: '#994499'
// }, {
//   label: 'Tolls',
//   data: [0, 1],
//   backgroundColor: '#316395'
// }, {
//   label: 'Parking',
//   data: [5, 2],
//   backgroundColor: '#b82e2e'
// }, {
//   label: 'Car tax',
//   data: [0, 1],
//   backgroundColor: '#66aa00','#dd4477','#0099c6','#990099','#109618','#109618','#dc3912', '#3366cc'
// }, {
//   label: 'Repairs and improvements',
//   data: [0, 2],
//   backgroundColor: '#dd4477'
// }, {
//   label: 'Maintenance',
//   data: [6, 1],
//   backgroundColor: '#0099c6'
// }, {
//   label: 'Inspection',
//   data: [0, 2],
//   backgroundColor: '#990099'
// }, {
//   label: 'Loan interest',
//   data: [0, 3],
//   backgroundColor: '#109618'
// }, {
//   label: 'Depreciation of the vehicle',
//   data: [0, 2],
//   backgroundColor: '#109618'
// }, {
//   label: 'Fuel',
//   data: [0, 1],
//   backgroundColor: '#dc3912', '#3366cc'
// }, {
//   label: 'Insurance and Breakdown cover',
//   data: [4, 0],
//   backgroundColor: '#3366cc'
// }]