import { TestBed } from '@angular/core/testing';

import { DogsBookService } from './dogs-book.service';

describe('DogsBookServiceService', () => {
  let service: DogsBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogsBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
