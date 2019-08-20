import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroMessagesComponent } from './superhero-messages.component';

describe('SuperheroMessagesComponent', () => {
  let component: SuperheroMessagesComponent;
  let fixture: ComponentFixture<SuperheroMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperheroMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
