import { catchError, map, Observable, of } from 'rxjs';
import { ColleagueService } from './../../../providers/colleague.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { newColleague } from 'src/app/models/colleague';

@Component({
  selector: 'tc-create-colleague-reactive-forms',
  templateUrl: './create-colleague-reactive-forms.component.html',
  styleUrls: ['./create-colleague-reactive-forms.component.scss']
})
export class CreateColleagueReactiveFormsComponent implements OnInit {

  formCreateCol: FormGroup;

  nouvCollegue : newColleague = {
    pseudo : '',
    last :'',
    first : '',
    photo : '',
  }

  constructor(private fb: FormBuilder, private collegueSrv: ColleagueService) {
    this.formCreateCol = fb.group({
      pseudo:['', {
        validators: [
          Validators.required,
        ],
        asyncValidators:[this.checkPseudo.bind(this)]
      }],
      last:['', {
        validators: [
          Validators.required,
          Validators.minLength(2)
        ],
        asyncValidators:[]
      }],
      first:['', {
        validators: [
          Validators.required,
          Validators.minLength(2),
          this.checkDiffName
        ],
        asyncValidators:[]
      }],
      photo:['', {
        validators: [
          Validators.required,
        ],
        asyncValidators:[]
      }]
    })
   }

  ngOnInit(): void {
  }

  attributInvalid(attribut: string){
    return this.formCreateCol.controls[attribut].dirty && this.formCreateCol.controls[attribut].invalid
  }

  envoyerAjout(){
    this.collegueSrv.ajouterCollegue(this.formCreateCol.value).subscribe(newC => this.nouvCollegue=newC);
    this.formCreateCol.reset();
  }

  checkDiffName(control: FormControl): ValidationErrors | null {
    const first = control.value;
    if(first != control.root.value.last) {
      return null;
    } else {
      return {nomDiff: 'Le nom et prénom doivent être différent'}
    }
  }

  checkPseudo(control: AbstractControl): Observable <ValidationErrors | null> {
    if(control.value === null) {
      return of(null)
    }
    return this.collegueSrv.getPseudo(control.value)
      .pipe(
        map(()=> <ValidationErrors> {pseudoInvalid : "Pseudo existe déjà"}),
        catchError(()=>of(null))
      )
  }
}
