import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions
} from "../../variables/charts";

import {
  lineChart,
  barChart
} from "../../components/main-table/main-table.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  
  public labelsets: any;
  public labels: any;
  private label: number = 0;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  stats = [
    {
      title: 'Average Retention',
      abbreviation: 'Av. Retention',
      value: 50,
      suffix: "%",
      color: '#59acfa'
    },
    {
      title: 'Productivity',
      abbreviation: "Productivity",
      value: 50,
      suffix: "%",
      color: '#febf0e'
    },
    {
      title: 'Average Employee Performance Score',
      abbreviation: 'Av. Empl Perf.',
      value: 50,
      suffix: "pts",
      color: '#f6851e'
    },
    {
      title: 'Number of Employees Left ?',
      abbreviation: '# of Empl Left',
      value: 50,
      suffix: "",
      color: '#ef4822'
    },
    {
      title: 'Active Employee Count',
      abbreviation: 'Active Empl #',
      value: 50,
      suffix: "",
      color: '#8dd26c'
    },
    {
      title: 'New Employee Count',
      abbreviation: 'New Empl #',
      value: 50,
      suffix: "",
      color: '#806cd2'
    }
  ];

  constructor() { }

  ngOnInit() {

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];

    this.labelsets = [
      ["Oct.","Nov.","Dec.","Jan.","Feb.","Mar.","Apr.","May","Jun."],
      ["4/31","5/7","5/14","5/21","5/28","6/4","6/11","6/18","6/25"]
    ];
    this.labels = this.labelsets[0];

    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: barChart.options,
      data: barChart.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: lineChart.options,
			data: lineChart.data
    });
    

  }

  public updateOptions() {
    this.label = this.label==0 ? 1 : 0;
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.data.labels = this.labelsets[this.label];
    this.salesChart.update();
  }
}
