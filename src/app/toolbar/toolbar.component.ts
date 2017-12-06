import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  
  @Output() menuClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
