import { ColleagueService } from './../../providers/colleague.service';
import { FullColleague } from './../../models/colleague';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tc-info-colleague',
  templateUrl: './info-colleague.page.html',
  styleUrls: ['./info-colleague.page.scss']
})
export class InfoColleaguePage implements OnInit {

  pseudo: any;

  collegue: FullColleague = {
    pseudo : '',
    last :'',
    first : '',
    photo : '',
    score: 0
  }

  constructor(private activedRoute: ActivatedRoute, private collegueSrv: ColleagueService) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(paramMap => this.pseudo=paramMap.get('pseudo'));
    this.collegueSrv.getPseudo(this.pseudo).subscribe(col => this.collegue=col);
  }

}
