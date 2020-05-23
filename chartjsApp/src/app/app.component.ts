import { Component } from '@angular/core';
import { ChartJSUtils } from 'src/chartjs-utils/chart-js-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chartjsApp';
  mylabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  myTitle = 'Total Report';
  myDataset = [
    {
      label: 'Dataset 1',
      data: [
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
      ],
    },

    {
      label: 'Dataset 2',
      data: [
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
      ],
    },
    {
      label: 'Dataset 3',
      data: [
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
      ],
    },
    {
      label: 'Dataset 4',
      data: [
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
        ChartJSUtils.randomNumber(),
      ],
    },
  ];
}
