import { Injectable } from '@angular/core';
import {Http, URLSearchParams, Response} from '@angular/http';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { IChild } from '../interfaces';

@Injectable()
export class DataService {

  _baseUrl: string = '';
  children: IChild[];

  private url = 'app/mock/children.json';

  constructor(private http: Http) { 
  }

  getChildren() : Observable<IChild[]> {
    if (!this.children) {
      return this.http.get(this.url)
        .map((res: Response) => {
          this.children = res.json();
          return this.children;
        })
        .catch(this.handleError);
    }
    else {
      return this.createObservable(this.children);
    }
  }
  
  private createObservable(data: any) : Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      observer.next(data);
      observer.complete();
    });
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }  
}