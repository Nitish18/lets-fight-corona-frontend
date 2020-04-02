import { TestBed } from '@angular/core/testing';

import { SendDataBackendService } from './send-data-backend.service';

describe('SendDataBackendService', () => {
  let service: SendDataBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendDataBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
