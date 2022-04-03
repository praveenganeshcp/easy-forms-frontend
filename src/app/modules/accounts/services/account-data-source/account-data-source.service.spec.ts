import { TestBed } from '@angular/core/testing';

import { AccountDataSourceService } from './account-data-source.service';

describe('AccountDataSourceService', () => {
  let service: AccountDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
