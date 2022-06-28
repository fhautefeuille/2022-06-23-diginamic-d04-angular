import { TCEventService } from './../../../providers/tcevent.service';
import { TCEvents } from 'src/app/models/tcevents';
import { Vote } from './../../../models/vote';
import { VoteService } from './../../../providers/vote.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit {

  listVote : Vote[] = [];
  abo!: Subscription;
  eventSub!: Subscription;

  supVote(voteI:number){
    this.listVote.splice(voteI,1)
  }

  constructor(private voteSrv : VoteService, private tcEvtSrv: TCEventService) { }

  ngOnInit(): void {
    this.refresh();
    this.abo = this.voteSrv.abonner().subscribe(v=>this.listVote.unshift(v));
    this.eventSub = this.tcEvtSrv.getTCEventObs()
    .pipe(filter(tcEvt => tcEvt===TCEvents.REFRESH))
    .subscribe(()=>this.refresh())
  }

  refresh(){
    this.voteSrv.list().subscribe(listV=>this.listVote=listV);
  }

  ngOnDestroy(): void {
    this.abo.unsubscribe();
    this.eventSub.unsubscribe();
  }

}
