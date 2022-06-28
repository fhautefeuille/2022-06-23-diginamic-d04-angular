import { Observable } from 'rxjs';
import { Colleague } from 'src/app/models/colleague';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL_COLLEAGUES = 'https://colleagues-app.herokuapp.com/api/v2/colleagues'

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor(private http:HttpClient) { }

  list(): Observable<Colleague[]> {
    return this.http.get<Colleague[]>(URL_COLLEAGUES)
  }
}
