import { TestBed } from '@angular/core/testing';

import { JsonFileService } from './jsonfile.service';

describe('JsonFileService', () => {
  let service: JsonFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
