import { TestBed } from '@angular/core/testing';

import { ReviewHttpService } from './review-http.service';

describe('ReviewHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewHttpService = TestBed.get(ReviewHttpService);
    expect(service).toBeTruthy();
  });
});
