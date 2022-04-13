import { TestBed } from '@angular/core/testing';

import { OeloeserverRestService } from './oeloeserver-rest.service';

describe('OeloeserverRestService', () => {
  let service: OeloeserverRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OeloeserverRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
