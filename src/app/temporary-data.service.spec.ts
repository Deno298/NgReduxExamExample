import { TestBed, inject } from '@angular/core/testing';

import { TemporaryDataService } from './temporary-data.service';

describe('TemporaryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemporaryDataService]
    });
  });

  it('should be created', inject([TemporaryDataService], (service: TemporaryDataService) => {
    expect(service).toBeTruthy();
  }));
});
