import { TestBed } from '@angular/core/testing';

import { RestServerStatusService } from './rest-server-status.service';

describe('RestServerStatusService', () => {
  let service: RestServerStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestServerStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
