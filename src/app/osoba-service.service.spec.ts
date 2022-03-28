import { TestBed } from '@angular/core/testing';

import { OsobaServiceService } from './osoba-service.service';

describe('OsobaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OsobaServiceService = TestBed.get(OsobaServiceService);
    expect(service).toBeTruthy();
  });
});
