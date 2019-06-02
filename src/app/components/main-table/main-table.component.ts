import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
} from "../../variables/charts";

// Colors
var colors = {
  gray: {
    100: '#f6f9fc',
    200: '#e9ecef',
    300: '#dee2e6',
    400: '#ced4da',
    500: '#adb5bd',
    600: '#8898aa',
    700: '#525f7f',
    800: '#32325d',
    900: '#212529'
  },
  theme: {
    'default': '#172b4d',
    'primary': '#5e72e4',
    'secondary': '#f4f5f7',
    'info': '#11cdef',
    'success': '#2dce89',
    'danger': '#f5365c',
    'warning': '#fb6340'
  },
  black: '#12263F',
  white: '#FFFFFF',
  transparent: 'transparent',
};

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements OnInit {

  teams = [
    { "name": "team1", "retention": 80 },
    { "name": "team2", "retention": 82 },
    { "name": "team3", "retention": 93 },
    { "name": "team4", "retention": 74 },
    { "name": "team5", "retention": 55 },
    // {"name": "team6", "retention" : 68 },
    // {"name": "team7", "retention" : 79 },
    // {"name": "team8", "retention" : 89 },
    // {"name": "team9", "retention" : 99 },
    // {"name": "team10", "retention" : 90 },
    // {"name": "team11", "retention" : 79 },
    // {"name": "team12", "retention" : 96 },
    // {"name": "team13", "retention" : 87 },
    // {"name": "team14", "retention" : 83 },
    // {"name": "team15", "retention" : 91 },
    // {"name": "team16", "retention" : 75 },
    // {"name": "team17", "retention" : 79 },
    // {"name": "team18", "retention" : 85 },
    // {"name": "team19", "retention" : 99 },
    // {"name": "team20", "retention" : 82 }
  ]

  ngOnInit() { }


}
export const lineChart = {
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: colors.gray[900],
          zeroLineColor: colors.gray[900]
        },
        ticks: {
          callback: function (value) {
            if (!(value % 10)) {
              // return '$' + value + 'k';
              return value + '%';
            }
          }
        }
      }]
    }
  },
  data: {
    labels: ["Oct.", "Nov.", "Dec.", "Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun."],
    datasets: [{
      label: 'Retention',
      data: [87, 90, 95, 92, 89, 92, 93, 93, 96]
    }]
  }
}

export const barChart = {
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function (value) {
              if (!(value % 10)) {
                //return '$' + value + 'k'
                return value + '%';
              }
            }
          }
        }
      ]
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";
          if (data.datasets.length > 1) {
            content += label;
          }
          content += yLabel;
          return content;
        }
      }
    }
  },
  data: {
    labels: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun."],
    datasets: [
      {
        label: "Sales",
        data: [25, 20, 30, 22, 17, 29]
      }
    ]
  }
}
