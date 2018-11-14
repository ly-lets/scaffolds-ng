import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {

  @Input() sampleText: string = "test component loaded";
  constructor() { }

  ngOnInit() {
  }

}
