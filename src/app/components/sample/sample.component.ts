import { Component, OnInit } from '@angular/core';
import { SampleService } from "../../services/sample/sample-service.service";
import { Sample } from "../../models/sample.model";
import { ResponseMessage } from "../../models/ResponseMessage.model";
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.less']
})
export class SampleComponent implements OnInit {
  sampleArr: Array<Sample> = new Array<Sample>();

  constructor(private sampleSVC: SampleService, private nzMsg: NzMessageService) { }

  ngOnInit() {

    this.loadData();
  }

  loadData() {
    let msgID = this.nzMsg.loading('Loading data in progress..', { nzDuration: 0 }).messageId;
    this.sampleSVC.getSamples().subscribe(res => {
      this.nzMsg.remove(msgID);
      this.nzMsg.info("Sample Data from .icndb.com");
      this.sampleArr = res.value;

    });
  }

  actionFunc(item: Sample) {
    this.nzMsg.info(item.joke);
  }

  actionFunc2() {
    this.nzMsg.info("action number two");
  }

}
