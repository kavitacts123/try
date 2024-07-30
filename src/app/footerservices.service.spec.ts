import { TestBed } from '@angular/core/testing';

import { FooterservicesService } from './footerservices.service';

describe('FooterservicesService', () => {
  let service: FooterservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
