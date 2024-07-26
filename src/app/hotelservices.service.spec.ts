import { TestBed } from '@angular/core/testing';

import { HotelservicesService } from './hotelservices.service';

describe('HotelservicesService', () => {
  let service: HotelservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
