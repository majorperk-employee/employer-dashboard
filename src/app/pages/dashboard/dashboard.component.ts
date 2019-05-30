import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
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


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
      type: 'line',
      options: chartExample1.options,
      data: chartExample1.data
    });
  }
}
