import { TestBed } from '@angular/core/testing';

import { DbInMemoryService } from './db-in-memory.service';

describe('DbInMemoryService', () => {
  let service: DbInMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbInMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
