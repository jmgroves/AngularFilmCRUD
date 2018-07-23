import { Component, OnInit } from '@angular/core';
import { Actor } from '../models/actor';
import { Film } from '../models/film';

@Component({
  selector: 'app-actor-disp',
  templateUrl: './actor-disp.component.html',
  styleUrls: ['./actor-disp.component.css']
})
export class ActorDispComponent implements OnInit {
  title = 'Actors';
  selected = null;
  addedActor = new Actor();
  boolAdd = false;
  editActor = null;
  addFilm = new Film();
  boolAddFilmsToActor = false;
  actors: Actor[] = [
    new Actor(1, 'Jared', 'Groves'),
    new Actor(2, 'Henry', 'Hick'),
    new Actor(3, 'Mike', 'Westen')
  ];

  setEditActor() {
    this.editActor = Object.assign({}, this.selected);
  }

  addSelect() {
    this.boolAdd = true;
  }

  generateId() {
    return this.actors[this.actors.length - 1].id + 1;
  }

  displayActor(actor) {
    this.selected = actor;
  }

  setCancelActor() {
    this.selected = null;
    this.addedActor = new Actor();
    this.boolAdd = false;
    this.editActor = null;
    this.boolAddFilmsToActor = false;
  }

  addActor() {
    this.addedActor.id = this.generateId();
    this.actors.push(this.addedActor);
    this.addedActor = new Actor();
    this.boolAdd = false;
  }

  updateActor(actor) {
    this.actors[actor.id - 1] = actor;
    this.setCancelActor();
  }

  dispAddFilmsToActor() {
    this.boolAddFilmsToActor = true;
  }

  addFilmsToActor(actor, film) {
    actor.films.push(film);
    film.actors.push(actor);
  }

  constructor() {}

  ngOnInit() {}
}
