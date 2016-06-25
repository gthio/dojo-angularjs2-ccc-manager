import { Component, OnInit, Input } from '@angular/core';

import { IChild } from '../../interfaces';

@Component({
  selector: 'child-list-grid',
  templateUrl: 'app/components/child-list/child-list-grid.component.html',
  styleUrls: [],
  directives: []
})
export class ChildListGridComponent implements OnInit {

  @Input() data: IChild[] = [];

  constructor() {
  }
  
  ngOnInit() {
  }  
}