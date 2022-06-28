import { Subscription, filter } from 'rxjs';
import { TCEventService } from './../../../providers/tcevent.service';
import { VoteService } from './../../../providers/vote.service';
import { Component, OnInit } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';
import { TCEvents } from 'src/app/models/tcevents';

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  countLike : number = 0;
  countHate : number = 0;

  eventSub!: Subscription

  constructor(private voteSrv : VoteService, private tcEvtSrv: TCEventService) { }

  ngOnInit(): void {
    this.voteSrv.abonner().subscribe(v => {
      if(v.vote === LikeHate.HATE) {
        this.countHate +=1;
      } else {
        this.countLike +=1;
      }
    })
    this.eventSub = this.tcEvtSrv.getTCEventObs()
    .pipe(filter(tcEvt => tcEvt===TCEvents.REFRESH))
    .subscribe(()=>this.refresh())
  }

  refresh(){
    this.countHate = 0;
    this.countLike = 0;
  }

  ngOnDestroy(): void {
    this.eventSub.unsubscribe()
  }

}
