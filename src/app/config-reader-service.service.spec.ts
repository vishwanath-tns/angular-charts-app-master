import { TestBed } from '@angular/core/testing';

import { ConfigReaderServiceService } from './config-reader-service.service';

describe('ConfigReaderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigReaderServiceService = TestBed.get(ConfigReaderServiceService);
    expect(service).toBeTruthy();
  });
});
