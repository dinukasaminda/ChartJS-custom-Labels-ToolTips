import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleChartComponent } from './sample-chart/sample-chart.component';
import { CommonStackedChartComponent } from './common-stacked-chart/common-stacked-chart.component';
import { CommonBarChartComponent } from './common-bar-chart/common-bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleChartComponent,
    CommonStackedChartComponent,
    CommonBarChartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
