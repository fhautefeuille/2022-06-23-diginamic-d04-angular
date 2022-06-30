import { ColleagueService } from './../../../providers/colleague.service';
import { newColleague } from './../../../models/colleague';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigateByUrl('/colleagues');
  }

  constructor(private collegueSrv: ColleagueService, private router: Router) { }

  ngOnInit(): void {
  }

}
