import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  bool: boolean = true;

  collapse(){
    this.bool=!this.bool;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
