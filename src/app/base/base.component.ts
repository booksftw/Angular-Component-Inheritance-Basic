import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  baseProp = 'I\'m a value from the base component. super() returns all my functionality to my children.';

  constructor(public router: Router) { }

  ngOnInit() {
  }

  openPage(routename: string) {
    this.router.navigateByUrl(`/${routename}`);
  }
}
