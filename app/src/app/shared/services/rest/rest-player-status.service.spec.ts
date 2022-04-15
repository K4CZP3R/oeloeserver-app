import { TestBed } from '@angular/core/testing';

import { RestPlayerStatusService } from './rest-player-status.service';

describe('RestPlayerStatusService', () => {
  let service: RestPlayerStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestPlayerStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
