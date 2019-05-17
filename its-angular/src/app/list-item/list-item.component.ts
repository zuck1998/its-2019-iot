import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input()
  prefix: string

  @Input()
  text: string;

  @Output()
  delete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  deleteItem = ()=>{
    this.delete.emit(this.text);
  }
}
