import {bootstrap}    from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './components/app.component';

import { DataService } from './services/data';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  DataService
])
.then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);
