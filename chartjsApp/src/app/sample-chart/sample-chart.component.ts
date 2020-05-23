import { Component, OnInit, Input } from '@angular/core';
import { ChartJSUtils } from 'src/chartjs-utils/chart-js-utils';

declare var Chart;
declare var chartColors;
@Component({
  selector: 'app-sample-chart',
  templateUrl: './sample-chart.component.html',
  styleUrls: ['./sample-chart.component.scss'],
})
export class SampleChartComponent implements OnInit {
  @Input() chartId: string =
    'canvas' + Date.now() + '' + ChartJSUtils.randomNumber(100000);
  MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  color: any = Chart.helpers.color;
  labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  randomScalingFactor1 = () => {
    var v = Math.round(Math.random() * 100) - 25;
    return v;
  };

  constructor() {}
  ngAfterViewInit() {
    this.chartInit();
  }

  ngOnInit(): void {}

  chartInit() {
    let barChartData = {
      labels: this.labels,
      datasets: [
        {
          label: 'Dataset 1',
          backgroundColor: this.color(chartColors.red).alpha(0.5).rgbString(),
          borderColor: chartColors.red,
          borderWidth: 1,
          data: [
            this.randomScalingFactor1(),
            this.randomScalingFactor1(),
            this.randomScalingFactor1(),
            this.randomScalingFactor1(),
            this.randomScalingFactor1(),
            this.randomScalingFactor1(),
            this.randomScalingFactor1(),
          ],
        },
        {
          label: 'Dataset 2',
          backgroundColor: this.color(chartColors.blue).alpha(0.5).rgbString(),
          borderColor: chartColors.blue,
          borderWidth: 1,
          data: [
            this.randomScalingFactor1(),
            this.randomScalingFactor1(),
            this.randomScalingFactor1(),
            this.randomScalingFactor1(),
            this.randomScalingFactor1(),
            this.randomScalingFactor1(),
            this.randomScalingFactor1(),
          ],
        },
      ],
    };

    let elmnt: any = <HTMLCanvasElement>document.getElementById(this.chartId);
    let ctx: any = elmnt.getContext('2d');
    let myBar = new Chart(ctx, {
      type: 'bar',
      data: barChartData,
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart',
        },
      },
    });
  }
}
