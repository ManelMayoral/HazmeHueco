import { TestBed } from '@angular/core/testing';

import { ServeiHHService } from './servei-hh.service';

describe('ServeiHHService', () => {
  let service: ServeiHHService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeiHHService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
