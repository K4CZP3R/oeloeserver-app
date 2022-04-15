import { TestBed } from '@angular/core/testing';

import { OeloeserverStateService } from './oeloeserver-state.service';

describe('OeloeserverStateService', () => {
  let service: OeloeserverStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OeloeserverStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
