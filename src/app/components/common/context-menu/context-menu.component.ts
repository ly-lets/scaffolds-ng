import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { NzDropdownContextComponent, NzDropdownService, NzMenuItemDirective } from 'ng-zorro-antd';
import { ContextMenuOptions } from "../../../models/ContextMenuOptions.interface";


@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.less']
})
export class ContextMenuComponent implements OnInit {
  private dropdown: NzDropdownContextComponent;
  @Input() menuOptions: Array<ContextMenuOptions> = [];


  contextMenu($event: MouseEvent, template: TemplateRef<void>): void {
    this.dropdown = this.nzDropdownService.create($event, template);
  }

  close(e: NzMenuItemDirective): void {
    console.log(e);
    this.dropdown.close();
  }

  constructor(
    private nzDropdownService: NzDropdownService) { }

  ngOnInit() {
  }

}
