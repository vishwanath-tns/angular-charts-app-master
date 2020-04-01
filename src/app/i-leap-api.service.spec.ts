import { TestBed } from '@angular/core/testing';

import { ILeapApiService } from './i-leap-api.service';

describe('ILeapApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ILeapApiService = TestBed.get(ILeapApiService);
    expect(service).toBeTruthy();
  });
});
