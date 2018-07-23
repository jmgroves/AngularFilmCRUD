import { Actor } from './../models/actor';

import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film';

@Component({
  selector: 'app-film-disp',
  templateUrl: './film-disp.component.html',
  styleUrls: ['./film-disp.component.css']
})
export class FilmDispComponent implements OnInit {
title = 'Film Site';
selected = null;
addedFilm = new Film();
boolAdd = false;
editFilm = null;
boolAddActorsToFilm = false;
  films: Film[] = [
    new Film(1, 'Academy Dinosaur', 'A cool Ass Movie', 1999, 4.99, 69, 'R', 1, [] ),
    new Film(2, 'Academy Dinosaur2', 'A cooler Ass Movie', 2002, 5.99, 70, 'PG-13', 1, [] ),
    new Film(3, 'Academy Dinosaur3', 'The Coolset Ass Movie', 2008, 6.99, 71, 'PG', 1, [] )
  ];



  setEditFilm() {
    this.editFilm = Object.assign({}, this.selected);
  }

  addSelect() {
    this.boolAdd = true;
  }

  generateId() {
    return this.films[this.films.length - 1].$id + 1;
  }

  displayFilm(film) {
    this.selected = film;
  }

  setCancelFilm() {
    this.selected = null;
    this.addedFilm = new Film();
    this.boolAdd = false;
    this.editFilm = null;
    this.boolAddActorsToFilm = false;
  }

  addFilm() {
  this.addedFilm.$id = this.generateId();
  this.films.push(this.addedFilm);
  this.addedFilm = new Film();
  this.boolAdd = false;
  }

 updateFilm(film) {
   this.films[film.$id - 1] = film;
   this.setCancelFilm();

  }

  setBoolAddActorsToFilm() {

    this.boolAddActorsToFilm = true;
  }

  addActorToFilm(film, actor) {
    film.actors.push(actor);
    actor.films.push(film);

  }
  constructor() { }

  ngOnInit() {
  }

}
