import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';

import { ChartsModule } from 'ng2-charts';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { ILeapApiService } from './i-leap-api.service';
import { TotalWorkOrdersComponent } from './total-work-orders/total-work-orders.component';
import { MaintenanceWorkloadComponent } from './maintenance-workload/maintenance-workload.component';
import { WOPrioritiesComponentComponent } from './wopriorities-component/wopriorities-component.component';
import { ConfigReaderServiceService } from './config-reader-service.service';

export const initializerConfigFn = (appConfig: ConfigReaderServiceService) => {
  return () => appConfig.loadConfig();
  };

  

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    BubbleChartComponent,
    StackedBarChartComponent,
    TotalWorkOrdersComponent,
    MaintenanceWorkloadComponent,
    WOPrioritiesComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializerConfigFn,
      multi: true,
      deps: [ConfigReaderServiceService],
    },
    ILeapApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }


