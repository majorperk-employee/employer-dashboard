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
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements OnInit {

  teams = [
    {"name": "team1", "retention" : 80 },
    {"name": "team2", "retention" : 82 },
    {"name": "team3", "retention" : 93 },
    {"name": "team4", "retention" : 74 },
    {"name": "team5", "retention" : 55 },
    {"name": "team6", "retention" : 68 },
    {"name": "team7", "retention" : 79 },
    {"name": "team8", "retention" : 89 },
    {"name": "team9", "retention" : 99 },
    {"name": "team10", "retention" : 90 },
    {"name": "team11", "retention" : 79 },
    {"name": "team12", "retention" : 96 },
    {"name": "team13", "retention" : 87 },
    {"name": "team14", "retention" : 83 },
    {"name": "team15", "retention" : 91 },
    {"name": "team16", "retention" : 75 },
    {"name": "team17", "retention" : 79 },
    {"name": "team18", "retention" : 85 },
    {"name": "team19", "retention" : 99 },
    {"name": "team20", "retention" : 82 }
  ]

  ngOnInit() { }

}
