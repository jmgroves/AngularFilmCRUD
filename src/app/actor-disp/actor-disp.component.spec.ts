import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorDispComponent } from './actor-disp.component';

describe('ActorDispComponent', () => {
  let component: ActorDispComponent;
  let fixture: ComponentFixture<ActorDispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorDispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
