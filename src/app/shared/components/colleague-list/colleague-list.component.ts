import { ColleagueService } from './../../../providers/colleague.service';
import { Component, OnInit } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {

  listCol : Colleague[] = [];

  constructor(private colleagueSrv: ColleagueService) { }

  ngOnInit(): void {
    this.colleagueSrv.list().subscribe(listC=>this.listCol=listC);
  }

}
