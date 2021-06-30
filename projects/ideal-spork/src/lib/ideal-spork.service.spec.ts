import { TestBed } from '@angular/core/testing';

import { IdealSporkService } from './ideal-spork.service';

describe('IdealSporkService', () => {
  let service: IdealSporkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdealSporkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
