import { TCEventService } from './../../../providers/tcevent.service';
import { ColleagueService } from './../../../providers/colleague.service';
import { Component, OnInit } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { filter, Subscription } from 'rxjs';
import { TCEvents } from 'src/app/models/tcevents';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {

  listCol : Colleague[] = [];
  eventSub!: Subscription;

  constructor(private colleagueSrv: ColleagueService, private tcEvtSrv: TCEventService) { }

  ngOnInit(): void {
    this.refresh();
    this.eventSub = this.tcEvtSrv.getTCEventObs()
    .pipe(filter(tcEvt => tcEvt===TCEvents.REFRESH))
    .subscribe(()=>this.refresh())
  }

  refresh() {
    this.colleagueSrv.list().subscribe(listC=>this.listCol=listC);
  }

  ngOnDestroy(): void {
    this.eventSub.unsubscribe()
  }

}
