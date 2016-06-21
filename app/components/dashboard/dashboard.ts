import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/components/dashboard/dashboard.html',
  styleUrls: ['app/components/dashboard/dashboard.css'],
  directives: []
})
export class DashboardComponent implements OnInit {

  constructor(private _router: Router) {
  }

  ngOnInit() {
  }
}