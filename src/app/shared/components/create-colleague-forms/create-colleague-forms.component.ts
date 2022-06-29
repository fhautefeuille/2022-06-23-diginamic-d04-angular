import { ColleagueService } from './../../../providers/colleague.service';
import { newColleague } from './../../../models/colleague';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent implements OnInit {

  nouvCollegue : newColleague = {
    pseudo : '',
    last :'',
    first : '',
    photo : '',
  }

  envoyerAjout(){
    this.collegueSrv.ajouterCollegue(this.nouvCollegue).subscribe(newC => this.nouvCollegue=newC);
  }

  constructor(private collegueSrv: ColleagueService) { }

  ngOnInit(): void {
  }

}
