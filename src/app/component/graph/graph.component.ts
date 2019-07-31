import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Monthly Average Temperature'
    },
    subtitle: {
      text: 'Source: WorldClimate.com'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: 'Temperature (°C)'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: [
      {
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        type: 'line'
      }, 
      {
        name: 'London',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
        type: 'line'
      },
      {
        name: 'Zootopia',
        data: [22.0, 23.2, 20.7, 22.5, 23.3, 24.9, 20.0, 17.6, 14.2, 13.3, 10.6, 7.8],
        type: 'line'
      }
    ],
    credits: {
      enabled: false
    },
    colors: ['#037ef3', '#f85a40', '#30c39e', '#0a8ea0', '#f48924']
  };

  constructor() { }

  ngOnInit() {
  }

}
