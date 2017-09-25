import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.id = this.route.snapshot.params['id'];
  }
}
