import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroesProfileEditorComponent } from './superheroes-profile-editor.component';

describe('SuperheroesProfileEditorComponent', () => {
  let component: SuperheroesProfileEditorComponent;
  let fixture: ComponentFixture<SuperheroesProfileEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperheroesProfileEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroesProfileEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
