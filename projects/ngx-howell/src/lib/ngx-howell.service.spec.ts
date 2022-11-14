import { TestBed } from '@angular/core/testing';

import { NgxHowellService } from './ngx-howell.service';

describe('NgxHowellService', () => {
  let service: NgxHowellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxHowellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
