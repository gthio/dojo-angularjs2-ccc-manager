import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data';
import { IChild } from '../../interfaces';

import { ChildListGridComponent } from './child-list-grid.component';
import { FilterTextBoxComponent } from '../shared/filterTextbox.component';

@Component({
  selector: 'child-list',
  templateUrl: 'app/components/child-list/child-list.component.html',
  styleUrls: ['app/components/child-list/child-list.component.css'],
  directives: [ FilterTextBoxComponent, ChildListGridComponent]
})
export class ChildListComponent implements OnInit {

  children: IChild[] = [];
  filteredChildren: IChild[] = [];

  constructor(private dataService: DataService) {
  }
  
  ngOnInit() {
    this.dataService.getChildren()
      .subscribe((children: IChild[]) => {
        this.children = children;
        this.filteredChildren = children;
      });
  }  
  
  filterChanged(filter: string){
    if (filter && this.children){
      this.filteredChildren = this.children
        .filter(x => {
          return false;
        });
    }
    else{
      this.filteredChildren = this.children;
    }
  }  
}