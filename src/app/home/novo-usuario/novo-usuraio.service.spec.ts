import { TestBed } from '@angular/core/testing';

import { NovoUsuraioService } from './novo-usuraio.service';

describe('NovoUsuraioService', () => {
  let service: NovoUsuraioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoUsuraioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
