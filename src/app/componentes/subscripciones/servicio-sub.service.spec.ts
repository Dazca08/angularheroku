import { TestBed } from '@angular/core/testing';

import { ServicioSubService } from './servicio-sub.service';

describe('ServicioSubService', () => {
  let service: ServicioSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
