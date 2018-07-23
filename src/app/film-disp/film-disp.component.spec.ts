import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDispComponent } from './film-disp.component';

describe('FilmDispComponent', () => {
  let component: FilmDispComponent;
  let fixture: ComponentFixture<FilmDispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
