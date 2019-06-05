import { TestBed } from '@angular/core/testing';

import { GoogleNewsFeedService } from './google-news-feed.service';

describe('GoogleNewsFeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleNewsFeedService = TestBed.get(GoogleNewsFeedService);
    expect(service).toBeTruthy();
  });
});
