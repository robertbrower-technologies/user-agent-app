import { TestBed, inject } from '@angular/core/testing';

import { ChromeActionsService } from './chrome-actions.service';

describe('ChromeActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChromeActionsService]
    });
  });

  it('should be created', inject([ChromeActionsService], (service: ChromeActionsService) => {
    expect(service).toBeTruthy();
  }));
});
