import { TestBed } from '@angular/core/testing';

import { LoginPermissionServiceService } from './login-permission-service.service';

describe('LoginPermissionServiceService', () => {
  let service: LoginPermissionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginPermissionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
