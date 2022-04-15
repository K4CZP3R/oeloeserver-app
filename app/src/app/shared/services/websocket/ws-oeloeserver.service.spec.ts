import { TestBed } from '@angular/core/testing';

import { WsOeloeserverService } from './ws-oeloeserver.service';

describe('WsOeloeserverService', () => {
  let service: WsOeloeserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsOeloeserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
