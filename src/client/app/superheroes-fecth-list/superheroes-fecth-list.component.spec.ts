import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroesFecthListComponent } from './superheroes-fecth-list.component';

describe('SuperheroesFecthListComponent', () => {
  let component: SuperheroesFecthListComponent;
  let fixture: ComponentFixture<SuperheroesFecthListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperheroesFecthListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroesFecthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
