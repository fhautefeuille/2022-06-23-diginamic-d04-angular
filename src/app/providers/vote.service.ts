import { FullColleague } from './../models/colleague';
import { LikeHate } from 'src/app/models/like-hate';
import { Colleague } from 'src/app/models/colleague';
import { HttpClient } from '@angular/common/http';
import { Vote } from './../models/vote';
import { Injectable } from '@angular/core';
import { Subject, Observable, tap } from 'rxjs';

const URL_HISTO_VOTES = 'https://colleagues-app.herokuapp.com/api/v2/votes';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http:HttpClient) { }

  list() : Observable<Vote[]> {
    return this.http.get<Vote[]>(URL_HISTO_VOTES)
  }

  private voteSub = new Subject<Vote>();

  ajouterVote(collegue : Colleague, vote : LikeHate){

    return this.http.post<FullColleague>(URL_HISTO_VOTES, {
      "pseudo":collegue.pseudo,
      "like_hate":vote
    }).pipe(
      tap(fullCol=>this.voteSub.next({
        colleague: fullCol,
        vote,
        score: fullCol.score}
      ))
    )
  }

  abonner() : Observable<Vote> {
    return this.voteSub.asObservable();
  }
}
