import { TestBed } from '@angular/core/testing';

import { ServicioDentistaService } from './servicio-dentista.service';

describe('ServicioDentistaService', () => {
  let service: ServicioDentistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDentistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
