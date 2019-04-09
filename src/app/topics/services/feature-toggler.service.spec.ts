import { TestBed } from '@angular/core/testing';

import { FeatureTogglerService } from './feature-toggler.service';

describe('FeatureTogglerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeatureTogglerService = TestBed.get(FeatureTogglerService);
    expect(service).toBeTruthy();
  });
});
