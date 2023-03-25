import { TestBed } from '@angular/core/testing';

import { GuardiasUrlGuard } from './guardias-url.guard';

describe('GuardiasUrlGuard', () => {
  let guard: GuardiasUrlGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardiasUrlGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
