import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { DashboardComponent } from './dashboard/dashboard';
import { ChildListComponent } from './child-list/child-list';

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/app.component.html',  
  styleUrls: ['app/components/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  {
    path: 'Dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: 'Children',
    name: 'Children',
    component: ChildListComponent,
    useAsDefault: false
  }
])
export class AppComponent { 
  title = 'CCC';
}