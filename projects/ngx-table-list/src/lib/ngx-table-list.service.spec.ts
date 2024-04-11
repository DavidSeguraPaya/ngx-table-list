import { TestBed } from '@angular/core/testing';

import { NgxTableListService } from './ngx-table-list.service';

describe('NgxTableListService', () => {
  let service: NgxTableListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTableListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
