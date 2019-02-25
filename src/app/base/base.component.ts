import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  openPage(routename: string) {
    this.router.navigateByUrl(`/${routename}`);
  }
}
