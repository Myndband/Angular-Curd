import { TestBed } from '@angular/core/testing';

import { UserbasedService } from './userbased.service';

describe('UserbasedService', () => {
  let service: UserbasedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserbasedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
