import { Vote } from './../models/vote';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor() { }

  list() : Vote[] {
    return []
  }

  private voteSub = new Subject<Vote>();

  ajouterVote(voteAjoute : Vote){
    this.voteSub.next(voteAjoute)
  }

  abonner() : Observable<Vote> {
    return this.voteSub.asObservable();
  }
}
