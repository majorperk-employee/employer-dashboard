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
    {"name": "team1", "rank" : 1 },
    {"name": "team2", "rank" : 2 },
    {"name": "team3", "rank" : 3 },
    {"name": "team4", "rank" : 4 },
    {"name": "team5", "rank" : 5 },
    {"name": "team6", "rank" : 6 },
    {"name": "team7", "rank" : 7 },
    {"name": "team8", "rank" : 8 },
    {"name": "team9", "rank" : 9 },
    {"name": "team10", "rank" : 10 },
    {"name": "team11", "rank" : 11 },
    {"name": "team12", "rank" : 12 },
    {"name": "team13", "rank" : 13 },
    {"name": "team14", "rank" : 14 },
    {"name": "team15", "rank" : 15 },
    {"name": "team16", "rank" : 16 },
    {"name": "team17", "rank" : 17 },
    {"name": "team18", "rank" : 18 },
    {"name": "team19", "rank" : 19 },
    {"name": "team20", "rank" : 20 }
  ]

  ngOnInit() { }

}
