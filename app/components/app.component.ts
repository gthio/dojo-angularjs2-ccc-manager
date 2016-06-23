import {Component} from '@angular/core';
import { provideRouter, RouterConfig } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';
//import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { DashboardComponent } from './dashboard/dashboard';
import { ChildListComponent } from './child-list/child-list';

const appRoutes: RouterConfig = [
  {
    path: 'Dashboard',
    //name: 'Dashboard',
    component: DashboardComponent,
    //useAsDefault: true
  },
  {
    path: 'Children',
    //name: 'Children',
    component: ChildListComponent,
    //useAsDefault: false
  }
];

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/app.component.html',  
  styleUrls: ['app/components/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    provideRouter(appRoutes)
  ]
})
export class AppComponent { 
  title = 'CCC';
}