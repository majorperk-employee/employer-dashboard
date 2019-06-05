import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSource = new MatTableDataSource<any>(TEAM_DATA.sort(function(a,b){ return a.ReetaynScore < b.ReetaynScore ? 1 : a.ReetaynScore > b.ReetaynScore? -1 : 0 }));
  displayedColumns: string[] = ["Team Id", "Name", "ReetaynScore", "Notes"];

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  get teamCallout(): any[] {
    let callout = [];
    
    let t1 = TEAM_DATA.length > 1 ? {team: TEAM_DATA[0], performance: "Two thumbs up", icon: "fa fa-thumbs-up", color: "green"} : null;
    let t2 = TEAM_DATA.length > 1 ? {team: TEAM_DATA[1], performance: "Two thumbs up", icon: "fa fa-thumbs-up", color: "green"} : null;
    let b1 = TEAM_DATA.length > 1 ? {team: TEAM_DATA[TEAM_DATA.length-1], performance: "Needs a hand", icon: "fa fa-handshake", color: "danger"} : null;
    let b2 = TEAM_DATA.length > 1 ? {team: TEAM_DATA[TEAM_DATA.length-2], performance: "Needs a hand", icon: "fa fa-handshake", color: "danger"} : null;

    callout.push(t1, t2, b1, b2);

    return callout;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

export interface team {
  id: string;
  name: string;
  ReetaynScore: string;
}

export interface teamCallout {
  under: {
    color: team;
    callout: string;
  }
}

const TEAM_DATA: any[] = [
  {id: 1, name: 'Team One', ReetaynScore: 72.5, notes: ' team notes'},
  {id: 2, name: 'Team Two', ReetaynScore: 69.2, notes: ' team notes'},
  {id: 3, name: 'Team Three', ReetaynScore: 89.4, notes: ' team notes'},
  {id: 4, name: 'Team Four', ReetaynScore: 91.2, notes: ' team notes'},
  {id: 5, name: 'Team Five', ReetaynScore: 61.8, notes: ' team notes'},
];