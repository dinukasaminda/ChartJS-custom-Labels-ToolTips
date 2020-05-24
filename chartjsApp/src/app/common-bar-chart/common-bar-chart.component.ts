import { Component, OnInit, Input } from '@angular/core';
import {
  graphXAsixMaxValue,
  withLables,
  lableShowValueMin,
  ChartJSUtils,
  CJChartDataSet,
  replaceAllStrings,
} from 'src/chartjs-utils/chart-js-utils';

declare var Chart;
declare var ChartDataLabels;
@Component({
  selector: 'app-common-bar-chart',
  templateUrl: './common-bar-chart.component.html',
  styleUrls: ['./common-bar-chart.component.scss'],
})
export class CommonBarChartComponent implements OnInit {
  @Input() chartId: string =
    'canvas' + Date.now() + '' + ChartJSUtils.randomNumber(100000);
  @Input() title: string = 'Chart.js Bar Chart';

  @Input() labels: string[] = [];
  @Input() datasets: CJChartDataSet[] = [];

  color: any = Chart.helpers.color;

  toolTopSortOrder = 'dec';

  constructor() {}
  ngAfterViewInit() {
    this.chartInit();
  }

  ngOnInit(): void {}

  chartInit() {
    let barChartData = {
      labels: this.labels,
      datasets: [],
    };
    let i = 0;

    this.datasets.forEach((dataset) => {
      let colors = [];
      dataset.data.forEach((item, i) => {
        colors.push(this.color(ChartJSUtils.Colors[i]).alpha(0.8).rgbString());
      });

      barChartData.datasets.push({
        label: dataset.label,
        backgroundColor: colors,
        borderColor: colors, // chartColors.red,
        borderWidth: 1,
        data: dataset.data,
      });

      i++;
    });

    let elmnt: any = <HTMLCanvasElement>document.getElementById(this.chartId);
    let ctx: any = elmnt.getContext('2d');
    let myBar = new Chart(ctx, {
      plugins: [ChartDataLabels],
      type: 'horizontalBar',
      data: barChartData,
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: this.title,
        },
        scales: {
          yAxes: [
            {
              // stacked: true,
            },
          ],
          xAxes: [
            {
              // stacked: true,
              ticks: {
                callback: function (value, index, values) {
                  return value + '%';
                },
                max: graphXAsixMaxValue,
              },
            },
          ],
        },
        tooltips: {
          mode: 'index',
          intersect: false,
          enabled: false,

          custom: function (tooltipModel) {
            ChartJSUtils.customToolTip(document, tooltipModel, 'dec', this);
          },
        },
        plugins: {
          datalabels: {
            color: '#000000',
            formatter: function (value, ctx) {
              let str = '';
              if (withLables && lableShowValueMin <= value) {
                let filterlabel = replaceAllStrings(ctx.dataset.label, '%', '');
                filterlabel = replaceAllStrings(filterlabel, '(', '');
                filterlabel = replaceAllStrings(filterlabel, ')', '');

                str += filterlabel + '- ';
              }
              str += value + '%';
              return str;
            },
            display: function (ctx) {
              if (ctx.active) {
                // console.log(ctx.dataset.label);
              }
              return ctx.dataset.data[ctx.dataIndex] > 0;
            },
            font: { weight: 'bold' },
            offset: 0,
            padding: 0,
          },
        },
      },
    });
  }
}
