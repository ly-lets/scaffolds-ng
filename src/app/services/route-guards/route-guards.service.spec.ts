import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CookieService } from 'ngx-cookie-service';
import { RouteGuardsService } from './route-guards.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

const routerSpy = {
  navigate: jasmine.createSpy('navigate'),
};

describe('RouteGuardsService', () => {
  let routeGuard: RouteGuardsService;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthService,
        { provide: Router, useValue: routerSpy },
      ],
    });
    routeGuard = TestBed.get(RouteGuardsService);
    authService = TestBed.get(AuthService);
  });

  it('should be created', () => {
    expect(routeGuard).toBeTruthy();
  });

  it('should not be able to activate when logged out', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(false);
    const res = routeGuard.canActivate(null, null);
    expect(res).toBeFalsy();
  });
  it('should be able to activate when logged in', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(true);
    const res = routeGuard.canActivate(null, null);
    expect(res).toBeTrue();
  });
});
