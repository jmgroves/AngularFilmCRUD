import { Film } from '../models/film';

export class Actor {

  id: number;
  fname: string;
  lname: string;
  films: Array<Film>;

  constructor(id?: number, fname?: string, lname?: string, films?: [Film]) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.films = films;
  }
}
