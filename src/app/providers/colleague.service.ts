import { Colleague } from 'src/app/models/colleague';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor() { }

  list(): Colleague[] {
    return [
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
  }
}
