import { TestBed, inject } from '@angular/core/testing';

import { FirefoxService } from './firefox.service';

describe('FirefoxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirefoxService]
    });
  });

  it('should be created', inject([FirefoxService], (service: FirefoxService) => {
    expect(service).toBeTruthy();
  }));
});
