import { TestBed, inject } from '@angular/core/testing';

import { DataErrService } from './data-err.service';

describe('DataErrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataErrService]
    });
  });

  it('should be created', inject([DataErrService], (service: DataErrService) => {
    expect(service).toBeTruthy();
  }));
});
