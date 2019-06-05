import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSource = new MatTableDataSource<any>(EMPLOYEE_DATA.sort(function(a,b){ return a.ReetaynScore < b.ReetaynScore ? 1 : a.ReetaynScore > b.ReetaynScore? -1 : 0 }));
  displayedColumns: string[] = ["Employee Id", "Name", "ReetaynScore", "Notes"];

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  get employeeCallout(): any[] {
    let callout = [];
    
    let t1 = EMPLOYEE_DATA.length > 1 ? {employee: EMPLOYEE_DATA[0], performance: "Two thumbs up", icon: "fa fa-thumbs-up", color: "green"} : null;
    let t2 = EMPLOYEE_DATA.length > 1 ? {employee: EMPLOYEE_DATA[1], performance: "Two thumbs up", icon: "fa fa-thumbs-up", color: "green"} : null;
    let b1 = EMPLOYEE_DATA.length > 1 ? {employee: EMPLOYEE_DATA[EMPLOYEE_DATA.length-1], performance: "Needs a hand", icon: "fa fa-handshake", color: "danger"} : null;
    let b2 = EMPLOYEE_DATA.length > 1 ? {employee: EMPLOYEE_DATA[EMPLOYEE_DATA.length-2], performance: "Needs a hand", icon: "fa fa-handshake", color: "danger"} : null;

    callout.push(t1, t2, b1, b2);

    return callout;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

export interface employee {
  id: string;
  name: string;
  ReetaynScore: string;
}

export interface employeeCallout {
  under: {
    color: employee;
    callout: string;
  }
}

const EMPLOYEE_DATA: any[] = [
  {id: 1, name: 'Troy Crema', ReetaynScore: 2.5, notes: ' employee notes'},
  {id: 2, name: 'Sam Seder', ReetaynScore: 99.2, notes: ' employee notes'},
  {id: 3, name: 'Sergei Hanka', ReetaynScore: 93.4, notes: ' employee notes'},
  {id: 4, name: 'Eric Seder', ReetaynScore: 95.2, notes: ' employee notes'},
  {id: 5, name: 'Luke Snell', ReetaynScore: 3.8, notes: ' employee notes'},
  {id: 6, name: 'Isaac Zhou', ReetaynScore: 98.0, notes: ' employee notes'},
  {id: 7, name: 'Employee', ReetaynScore: 10.6, notes: ' employee notes'},
  {id: 8, name: 'Employee', ReetaynScore: 19.9, notes: ' employee notes'},
  {id: 9, name: 'Employee', ReetaynScore: 19.8, notes: ' employee notes'},
  {id: 10, name: 'Employee', ReetaynScore: 27.9, notes: ' employee notes'},
  {id: 11, name: 'Employee', ReetaynScore: 17.5, notes: ' employee notes'},
  {id: 12, name: 'Employee', ReetaynScore: 42.2, notes: ' employee notes'},
  {id: 13, name: 'Employee', ReetaynScore: 66.4, notes: ' employee notes'},
  {id: 14, name: 'Employee', ReetaynScore: 95.2, notes: ' employee notes'},
  {id: 15, name: 'Employee', ReetaynScore: 11.8, notes: ' employee notes'},
  {id: 16, name: 'Employee', ReetaynScore: 11.0, notes: ' employee notes'},
  {id: 17, name: 'Employee', ReetaynScore: 10.6, notes: ' employee notes'},
  {id: 18, name: 'Employee', ReetaynScore: 19.9, notes: ' employee notes'},
  {id: 19, name: 'Employee', ReetaynScore: 19.8, notes: ' employee notes'},
  {id: 20, name: 'Employee', ReetaynScore: 27.9, notes: ' employee notes'},
];