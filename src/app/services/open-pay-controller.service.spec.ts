import { TestBed } from '@angular/core/testing';

import { OpenPayControllerService } from './open-pay-controller.service';

describe('OpenPayControllerService', () => {
  let service: OpenPayControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenPayControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
