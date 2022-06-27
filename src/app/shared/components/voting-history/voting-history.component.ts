import { Vote } from './../../../models/vote';
import { VoteService } from './../../../providers/vote.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit {

  listVote : Vote[] = [];

  supVote(voteI:number){
    this.listVote.splice(voteI,1)
  }

  constructor(private voteSrv : VoteService) { }

  ngOnInit(): void {
    this.listVote = this.voteSrv.list();
  }

}
