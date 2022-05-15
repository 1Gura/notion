import { TestBed } from '@angular/core/testing';

import { PageNoteService } from './page-note.service';

describe('PageNoteService', () => {
  let service: PageNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
