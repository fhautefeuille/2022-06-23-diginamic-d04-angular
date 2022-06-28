import { TCEventService } from './../../providers/tcevent.service';
import { Component, OnInit } from '@angular/core';
import { TCEvents } from 'src/app/models/tcevents';

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage implements OnInit {

  constructor(private tcEvSrv: TCEventService) { }

  ngOnInit(): void {
  }

  refresh(){
    this.tcEvSrv.publish(TCEvents.REFRESH)
  }

}
