import { Component, OnInit } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit {

  listVote : Colleague[] = [
    {
      pseudo : 'collegue1',
      score : 100,
      photo : 'https://img.pokemondb.net/artwork/original/pikachu-gen1-jp.jpg'
    },
    {
      pseudo : 'collegue2',
      score : 999,
      photo : 'https://img.pokemondb.net/artwork/original/pikachu-gen1-jp.jpg'
    },
    {
      pseudo : 'collegue3',
      score : 100,
      photo : 'https://img.pokemondb.net/artwork/original/pikachu-gen1-jp.jpg'
    },
    {
      pseudo : 'collegue4',
      score : 0,
      photo : 'https://img.pokemondb.net/artwork/original/pikachu-gen1-jp.jpg'
    },
  ]

  supVote(voteI:number){
    this.listVote.splice(voteI,1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
