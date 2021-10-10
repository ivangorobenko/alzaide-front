import { TestBed } from '@angular/core/testing';

import { LaisserMessageService } from './laisser-message.service';

describe('LaisserMessageService', () => {
  let service: LaisserMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaisserMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
