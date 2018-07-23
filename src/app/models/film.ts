import { Actor } from '../models/actor';

export class Film {
  id: number;
  title: string;
  description: string;
  releaseYear: number;
  rentalRate: number;
  length: number;
  rating: string;
  languageId: number;
  actors: Array<Actor>;


  constructor(
    id?: number,
    title?: string,
    description?: string,
    releaseYear?: number,
    rentalRate?: number,
    length?: number,
    rating?: string,
    languageId?: number,
    actors?: Array<Actor>
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.releaseYear = releaseYear;
    this.rentalRate = rentalRate;
    this.length = length;
    this.rating = rating;
    this.languageId = languageId;
    this.actors = actors;
  }


}
