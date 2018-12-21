import { Component, OnInit, Input } from '@angular/core';
const DataSet = require('@antv/data-set');

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {


  sourceData = [
    { item: '事例一', count: 40 },
    { item: '事例二', count: 21 },
    { item: '事例三', count: 17 },
    { item: '事例四', count: 13 },
    { item: '事例五', count: 9 }
  ];

  scale = [{
    dataKey: 'percent',
    min: 0,
    formatter: '.0%',
  }];
  data: any;

  @Input() sampleText: string = "test component loaded";
  constructor() {
    const dv = new DataSet.View().source(this.sourceData);
    dv.transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent'
    });
    this.data = dv.rows;
  }

  ngOnInit() {
  }

}
