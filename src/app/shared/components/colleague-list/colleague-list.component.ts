import { Component, OnInit } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {

  listCol : Colleague[] = [
    {
      pseudo : 'collegue1',
      score : 100,
      photo : 'https://img.pokemondb.net/artwork/original/pikachu-gen1-jp.jpg'
    },
    {
      pseudo : 'collegue1',
      score : 999,
      photo : 'https://img.pokemondb.net/artwork/original/pikachu-gen1-jp.jpg'
    },
    {
      pseudo : 'collegue1',
      score : 100,
      photo : 'https://img.pokemondb.net/artwork/original/pikachu-gen1-jp.jpg'
    },
    {
      pseudo : 'collegue1',
      score : 0,
      photo : 'https://img.pokemondb.net/artwork/original/pikachu-gen1-jp.jpg'
    },
    {
      pseudo : 'collegue1',
      score : 100,
      photo : 'https://img.pokemondb.net/artwork/original/pikachu-gen1-jp.jpg'
    },
    {
      pseudo : 'collegue1',
      score : 100,
      photo : 'https://img.pokemondb.net/artwork/original/pikachu-gen1-jp.jpg'
    },
    {
      pseudo : 'collegue1',
      score : -999,
      photo : 'https://img.pokemondb.net/artwork/original/pikachu-gen1-jp.jpg'
    },
    {
      pseudo : 'collegue1',
      score : 100,
      photo : 'https://img.pokemondb.net/artwork/original/pikachu-gen1-jp.jpg'
    },
    {
      pseudo : 'collegue1',
      score : 100,
      photo : 'https://img.pokemondb.net/artwork/original/pikachu-gen1-jp.jpg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
