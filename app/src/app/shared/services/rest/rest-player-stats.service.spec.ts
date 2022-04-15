import { TestBed } from '@angular/core/testing';

import { RestPlayerStatsService } from './rest-player-stats.service';

describe('RestPlayerStatsService', () => {
  let service: RestPlayerStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestPlayerStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
