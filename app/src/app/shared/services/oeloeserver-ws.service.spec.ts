import { TestBed } from '@angular/core/testing';

import { OeloeserverWsService } from './oeloeserver-ws.service';

describe('OeloeserverWsService', () => {
  let service: OeloeserverWsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OeloeserverWsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
