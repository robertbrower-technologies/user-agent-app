import { TestBed, inject } from '@angular/core/testing';

import { FirefoxActionsService } from './firefox-actions.service';

describe('FirefoxActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirefoxActionsService]
    });
  });

  it('should be created', inject([FirefoxActionsService], (service: FirefoxActionsService) => {
    expect(service).toBeTruthy();
  }));
});
