import { VoteService } from './../../../providers/vote.service';
import { Component, OnInit } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  countLike : number = 0;
  countHate : number = 0;

  constructor(private voteSrv : VoteService) { }

  ngOnInit(): void {
    this.voteSrv.abonner().subscribe(v => {
      if(v.vote === LikeHate.HATE) {
        this.countHate +=1;
      } else {
        this.countLike +=1;
      }
    })
  }

}
