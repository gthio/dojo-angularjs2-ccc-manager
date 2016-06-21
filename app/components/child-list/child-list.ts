import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { DataService } from '../../services/data';
import { IChild } from '../../interfaces';

import { ChildListGridComponent } from './child-list-grid';

@Component({
  selector: 'child-list',
  templateUrl: 'app/components/child-list/child-list.html',
  styleUrls: ['app/components/child-list/child-list.css'],
  directives: [ChildListGridComponent]
})
export class ChildListComponent implements OnInit {

  children: IChild[] = [];

  constructor(private _router: Router,
    private dataService: DataService) {
  }
  
  ngOnInit() {
    this.dataService.getChildren()
      .subscribe((children: IChild[]) => {
        this.children = children;
      });
  }  
}