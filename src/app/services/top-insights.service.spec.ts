import { TestBed, inject } from '@angular/core/testing';

import { TopInsightsService } from './top-insights.service';

describe('TopInsightsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopInsightsService]
    });
  });

  it('should be created', inject([TopInsightsService], (service: TopInsightsService) => {
    expect(service).toBeTruthy();
  }));
});
