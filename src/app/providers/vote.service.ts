import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from './../models/vote';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor() { }

  list() : Vote[] {
    return [
      {
        colleague : {
          pseudo : 'collegue1',
          score : 100,
          photo : 'https://img.pokemondb.net/artwork/original/pikachu-gen1-jp.jpg'
        },
        vote : LikeHate.HATE
      },
      {
        colleague : {
          pseudo : 'collegue2',
          score : 100,
          photo : 'https://img.pokemondb.net/artwork/original/pikachu-gen1-jp.jpg'
        },
        vote : LikeHate.LIKE
      },
      {
        colleague : {
          pseudo : 'collegue3',
          score : 100,
          photo : 'https://img.pokemondb.net/artwork/original/pikachu-gen1-jp.jpg'
        },
        vote : LikeHate.LIKE
      },
      {
        colleague : {
          pseudo : 'collegue4',
          score : 100,
          photo : 'https://img.pokemondb.net/artwork/original/pikachu-gen1-jp.jpg'
        },
        vote : LikeHate.HATE
      },
    ]
  }
}
