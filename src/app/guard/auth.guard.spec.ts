import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../guard/auth.service';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let authService: AuthService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        AuthGuard,
        AuthService,
      ]
    });
  });

  beforeEach(() => {
    authGuard = TestBed.get(AuthGuard);
    authService = TestBed.get(AuthService);
  });

  it('should create...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should return true when user is logged in', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(authGuard.canActivate(null, null)).toBe(true);
  });

  it('should return false when user is not logged in', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    spyOn(Router.prototype, 'navigate');
    expect(authGuard.canActivate(null, null)).toBe(false);
  });

});