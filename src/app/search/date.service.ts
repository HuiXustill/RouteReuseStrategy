import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Date,DATES }           from './mock-date';

@Injectable()
export class DateService {

  constructor(private http: Http) {}

  search(term: string) {
    // return this.http
    //   .get(`api/heroes/?name=${term}`)
    //   .map(response => response.json().data as Date[]);
    return DATES;
  }
}
