import { TestBed } from '@angular/core/testing';

import { OeloeserverService } from './oeloeserver.service';

describe('OeloeserverService', () => {
  let service: OeloeserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OeloeserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
