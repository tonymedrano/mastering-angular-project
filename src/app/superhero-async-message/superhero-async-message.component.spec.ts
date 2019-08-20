import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroAsyncMessageComponent } from './superhero-async-message.component';

describe('SuperheroAsyncMessageComponent', () => {
  let component: SuperheroAsyncMessageComponent;
  let fixture: ComponentFixture<SuperheroAsyncMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperheroAsyncMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroAsyncMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
