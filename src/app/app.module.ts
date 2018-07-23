import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Actor } from './models/actor';
import { Film } from './models/film';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorDispComponent } from './actor-disp/actor-disp.component';
import { FilmDispComponent } from './film-disp/film-disp.component';




@NgModule({
  declarations: [
    AppComponent,
    ActorDispComponent,
    FilmDispComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
