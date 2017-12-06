import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild("sidenav") sidenav: MatSidenav;

  constructor() { }

  close() {
    this.sidenav.close();
  }

  toggle() {
    this.sidenav.open();
  }

  ngOnInit() {
  }

}
