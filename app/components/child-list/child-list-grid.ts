import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { IChild } from '../../interfaces';

@Component({
  selector: 'child-list-grid',
  templateUrl: 'app/components/child-list/child-list-grid.html',
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