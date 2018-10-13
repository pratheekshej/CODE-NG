import { TestBed, inject } from '@angular/core/testing';

import { DGridService } from './d-grid.service';

describe('DGridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DGridService]
    });
  });

  it('should be created', inject([DGridService], (service: DGridService) => {
    expect(service).toBeTruthy();
  }));
});
