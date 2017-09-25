import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-infomation',
  templateUrl: './infomation.component.html',
})
export class InfomationComponent implements OnInit {
  id$: Observable<string>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
  }
}
