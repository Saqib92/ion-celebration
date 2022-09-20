import { TestBed } from '@angular/core/testing';

import { IonCelebrationService } from './ion-celebration.service';

describe('IonCelebrationService', () => {
  let service: IonCelebrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonCelebrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
