import { TestBed, async, inject } from '@angular/core/testing';

import { RoleGuard } from './role.guard';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../guard/auth.service';
import { Identity } from './identity';

describe('RoleGuardGuard', () => {
  let authGuard: RoleGuard;
  let authService: AuthService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        RoleGuard,
        AuthService,
      ]
    });
  });

  beforeEach(() => {
    authGuard = TestBed.get(RoleGuard);
    authService = TestBed.get(AuthService);
  });

  it('should create...', inject([RoleGuard], (guard: RoleGuard) => {
    expect(guard).toBeTruthy();
  }));


  it('should return true when user is allowed', () => {
    const identity = new Identity();
    identity.role = 'allowed';
    const ars = new ActivatedRouteSnapshot();
    ars.data = {role : 'allowed'};

    spyOn(authService, 'getIdentity').and.returnValue(identity);
    expect(authGuard.canActivate(ars, null)).toBe(true);
  });

  it('should return false when user is not allowed', () => {
    const identity = new Identity();
    identity.role = 'not_allowed';
    const ars = new ActivatedRouteSnapshot();
    ars.data = {role : 'allowed'};

    spyOn(authService, 'isAuthenticated').and.returnValue(identity);
    spyOn(Router.prototype, 'navigate');
    expect(authGuard.canActivate(ars, null)).toBe(false);
  });
});