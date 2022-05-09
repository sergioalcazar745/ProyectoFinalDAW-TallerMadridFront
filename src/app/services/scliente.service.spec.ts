import { TestBed } from '@angular/core/testing';

import { SclienteService } from './scliente.service';

describe('SclienteService', () => {
  let service: SclienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SclienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
