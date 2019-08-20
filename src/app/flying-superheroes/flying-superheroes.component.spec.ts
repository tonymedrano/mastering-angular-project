import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyingSuperheroesComponent } from './flying-superheroes.component';

describe('FlyingSuperheroesComponent', () => {
  let component: FlyingSuperheroesComponent;
  let fixture: ComponentFixture<FlyingSuperheroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyingSuperheroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyingSuperheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
