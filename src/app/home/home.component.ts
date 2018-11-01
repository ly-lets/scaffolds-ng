import { Component, OnInit } from '@angular/core';
import { GuardsService } from "../services/routeguards/guards.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  breadCrumbArr: Array<string> = [];
  constructor(private guard: GuardsService) {
    console.log('home constructed');

    this.guard.bindBreadCrumbs().subscribe(res => {
      console.log(res);

      if (res) {
        this.breadCrumbArr = res;
      } else {
        this.breadCrumbArr = [];
      }
    });
  }

  ngOnInit() {

  }

}
