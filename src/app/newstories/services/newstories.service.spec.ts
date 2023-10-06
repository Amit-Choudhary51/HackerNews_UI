import { TestBed } from '@angular/core/testing';

import { NewstoriesService } from './newstories.service';

describe('NewstoriesService', () => {
  let service: NewstoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewstoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
