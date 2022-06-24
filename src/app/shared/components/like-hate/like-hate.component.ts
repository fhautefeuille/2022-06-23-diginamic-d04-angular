import { LikeHate } from './../../../models/like-hate';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent implements OnInit {

  @Input() score!: number;

  @Output() clickLikeHate = new EventEmitter<LikeHate>();

  clickLike(){
    this.clickLikeHate.emit(LikeHate.LIKE)
  }

  clickHate(){
    this.clickLikeHate.emit(LikeHate.HATE)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
