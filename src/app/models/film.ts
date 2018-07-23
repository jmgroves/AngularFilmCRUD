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

  /**
   * Getter $id
   * @return {number}
   */
  public get $id(): number {
    return this.id;
  }

  /**
   * Getter $title
   * @return {string}
   */
  public get $title(): string {
    return this.title;
  }

  /**
   * Getter $description
   * @return {string}
   */
  public get $description(): string {
    return this.description;
  }

  /**
   * Getter $releaseYear
   * @return {number}
   */
  public get $releaseYear(): number {
    return this.releaseYear;
  }

  /**
   * Getter $rentalRate
   * @return {number}
   */
  public get $rentalRate(): number {
    return this.rentalRate;
  }

  /**
   * Getter $length
   * @return {number}
   */
  public get $length(): number {
    return this.length;
  }

  /**
   * Getter $rating
   * @return {string}
   */
  public get $rating(): string {
    return this.rating;
  }

  /**
   * Getter $languageId
   * @return {number}
   */
  public get $languageId(): number {
    return this.languageId;
  }

  /**
   * Getter $actors
   * @return {Array<Actor>}
   */
  public get $actors(): Array<Actor> {
    return this.actors;
  }

  /**
   * Setter $id
   * @param {number} value
   */
  public set $id(value: number) {
    this.id = value;
  }

  /**
   * Setter $title
   * @param {string} value
   */
  public set $title(value: string) {
    this.title = value;
  }

  /**
   * Setter $description
   * @param {string} value
   */
  public set $description(value: string) {
    this.description = value;
  }

  /**
   * Setter $releaseYear
   * @param {number} value
   */
  public set $releaseYear(value: number) {
    this.releaseYear = value;
  }

  /**
   * Setter $rentalRate
   * @param {number} value
   */
  public set $rentalRate(value: number) {
    this.rentalRate = value;
  }

  /**
   * Setter $length
   * @param {number} value
   */
  public set $length(value: number) {
    this.length = value;
  }

  /**
   * Setter $rating
   * @param {string} value
   */
  public set $rating(value: string) {
    this.rating = value;
  }

  /**
   * Setter $languageId
   * @param {number} value
   */
  public set $languageId(value: number) {
    this.languageId = value;
  }

  /**
   * Setter $actors
   * @param {Array<Actor>} value
   */
  public set $actors(value: Array<Actor>) {
    this.actors = value;
  }
}
