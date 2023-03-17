import { TestBed } from '@angular/core/testing';

import { RolebasedService } from './rolebased.service';

describe('RolebasedService', () => {
  let service: RolebasedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolebasedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
