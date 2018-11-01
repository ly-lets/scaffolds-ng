import { Component, OnInit } from '@angular/core';
import { SampleService } from "../../services/sample/sample-service.service";
import { Sample } from "../../models/sample.model";
import { ResponseMessage } from "../../models/ResponseMessage.model";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.less']
})
export class SampleComponent implements OnInit {
  sampleArr: Array<Sample> = new Array<Sample>();

  constructor(private sampleSVC: SampleService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.sampleSVC.getSamples().subscribe(res => {
      this.sampleArr = res.value;
    });
  }

  actionFunc(item: Sample) {
    console.log(item);
  }

  actionFunc2() {
    console.log('test function');
  }

}
