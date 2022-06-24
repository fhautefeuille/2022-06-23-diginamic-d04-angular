import { Colleague } from './../../../models/colleague';
import { Component, Input, OnInit } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent implements OnInit {

  @Input() col!: Colleague;

  changeScore(likeOrHate : LikeHate){
    if(likeOrHate==LikeHate.LIKE){
      this.col.score += 1;
    }
    if(likeOrHate==LikeHate.HATE) {
      this.col.score -= 1;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
