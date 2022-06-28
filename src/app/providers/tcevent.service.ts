import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { TCEvents } from '../models/tcevents';

@Injectable({
  providedIn: 'root'
})
export class TCEventService {

  private subjectEvent = new Subject<TCEvents>();

  constructor() { }

  publish(event: TCEvents){
    this.subjectEvent.next(event)
  }

  getTCEventObs() {
    return this.subjectEvent.asObservable()
  }
}
