import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameProfileEditorComponent } from './name-profile-editor.component';

describe('NameProfileEditorComponent', () => {
  let component: NameProfileEditorComponent;
  let fixture: ComponentFixture<NameProfileEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameProfileEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameProfileEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
