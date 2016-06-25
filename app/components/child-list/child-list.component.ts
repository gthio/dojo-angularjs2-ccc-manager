import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data';
import { IChild } from '../../interfaces';

import { ChildListGridComponent } from './child-list-grid.component';

@Component({
  selector: 'child-list',
  templateUrl: 'app/components/child-list/child-list.component.html',
  styleUrls: ['app/components/child-list/child-list.component.css'],
  directives: [ChildListGridComponent]
})
export class ChildListComponent implements OnInit {

  children: IChild[] = [];

  constructor(private dataService: DataService) {
  }
  
  ngOnInit() {
    this.dataService.getChildren()
      .subscribe((children: IChild[]) => {
        this.children = children;
      });
  }  
}