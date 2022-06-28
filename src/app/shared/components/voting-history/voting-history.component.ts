import { Vote } from './../../../models/vote';
import { VoteService } from './../../../providers/vote.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit {

  listVote : Vote[] = [];
  abo!: Subscription

  supVote(voteI:number){
    this.listVote.splice(voteI,1)
  }

  constructor(private voteSrv : VoteService) { }

  ngOnInit(): void {
    this.voteSrv.list().subscribe(listV=>this.listVote=listV);
    this.abo = this.voteSrv.abonner().subscribe(v=>this.listVote.unshift(v))
  }

  ngOnDestroy(): void {
    this.abo.unsubscribe();
  }

}
