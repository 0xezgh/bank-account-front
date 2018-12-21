import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-operations-history',
  templateUrl: './operations-history.component.html',
  styleUrls: ['./operations-history.component.scss']
})
export class OperationsHistoryComponent implements OnInit {
  displayedColumns: string[] = ['date', 'amount', 'balance'];
  dataSource = new MatTableDataSource<Operation>(OPERATIONS_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

  export interface Operation {
    date: string;
    amount: number;
    balance: number;
  }
  const OPERATIONS_DATA: Operation[] = [
    {date: "10-12-2018", amount: 100, balance: 100},
    {date: "11-12-2018", amount: 200, balance: 300},
    {date: "12-12-2018", amount: -150, balance: 150},
    {date: "12-12-2018", amount: -150, balance: 0},
    {date: "12-12-2018", amount: 300, balance: 300},
    {date: "12-12-2018", amount: -10, balance: 290},
    {date: "13-12-2018", amount: 80, balance: 370},
    {date: "14-12-2018", amount: 200, balance: 170},
    {date: "17-12-2018", amount: -150, balance: 20},
    {date: "19-12-2018", amount: 80, balance: 100},
    {date: "19-12-2018", amount: -100, balance: 0},
  ];
