import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css'],
  directives: []
})
export class DashboardComponent implements OnInit {

  constructor(
    private _router: Router) {
  }

  ngOnInit() {
  }
}