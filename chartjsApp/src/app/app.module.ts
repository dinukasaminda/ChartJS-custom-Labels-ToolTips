import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleChartComponent } from './sample-chart/sample-chart.component';
import { CommonStackedChartComponent } from './common-stacked-chart/common-stacked-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleChartComponent,
    CommonStackedChartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
