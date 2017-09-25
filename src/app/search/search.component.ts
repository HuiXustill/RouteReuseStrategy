import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DateService } from './date.service';
import { Date,  } from './mock-date';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  dates:Date[];
  name:string;

  constructor(private route: ActivatedRoute,
              private dateService: DateService) {
  }

  ngOnInit() {
  }
  getDates(): void {
    this.name = 'N';
    this.dates = this.dateService.search(this.name)
    console.log(this.dates);
  }

}
