import { VoteService } from './../../../providers/vote.service';
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
    this.voteSrv.ajouterVote(this.col,likeOrHate)
      .subscribe(col => this.col.score = col.score);
  }

  constructor(private voteSrv:VoteService ) { }

  ngOnInit(): void {
  }



}
