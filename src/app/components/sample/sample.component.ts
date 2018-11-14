import { Component, OnInit } from '@angular/core';
import { SampleService } from "../../services/sample/sample-service.service";
import { Sample } from "../../models/sample.model";
import { ResponseMessage } from "../../models/ResponseMessage.model";
import { NzMessageService } from 'ng-zorro-antd';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { TestComponent } from "../test/test.component";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.less']
})
export class SampleComponent implements OnInit {
  sampleArr: Array<Sample> = new Array<Sample>();

  constructor(private sampleSVC: SampleService, private nzMsg: NzMessageService, private modalService: NzModalService) { }

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

  editItem() {
    this.createComponentModal();
  }

  createComponentModal(): void {
    const modal = this.modalService.create<TestComponent>({
      nzTitle: 'Modal Title',
      nzContent: TestComponent,
      // nzComponentParams: {
      //   title: 'title in component',
      //   subtitle: 'component sub title，will be changed after 2 sec'
      // },
      // nzFooter: [{
      //   label: 'change component tilte from outside',
      //   onClick: (componentInstance) => {
      //     componentInstance.title = 'title in inner component is changed';
      //   }
      // }]
    });

    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));

    // Return a result when closed
    modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));

    // delay until modal instance created
    window.setTimeout(() => {
      const instance = modal.getContentComponent();
      instance.sampleText = 'sample component changed from parent';
    }, 2000);
  }

}
