import { TestBed } from '@angular/core/testing';

import { ScrollRegistryService } from './scroll-registry.service';

describe('ScrollRegistryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollRegistryService = TestBed.get(ScrollRegistryService);
    expect(service).toBeTruthy();
  });
});
