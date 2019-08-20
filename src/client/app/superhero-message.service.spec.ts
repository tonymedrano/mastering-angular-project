import { TestBed } from '@angular/core/testing';

import { SuperheroMessageService } from './superhero-message.service';

describe('SuperheroMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuperheroMessageService = TestBed.get(SuperheroMessageService);
    expect(service).toBeTruthy();
  });
});
