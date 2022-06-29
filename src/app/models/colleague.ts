export interface Colleague {
  pseudo: string;
  score: number;
  photo: string;
}

export interface FullColleague extends Colleague{
  first:string;
  last:string;
}

export interface newColleague {
  pseudo: string;
  last: string;
  first: string;
  photo: string;
}
