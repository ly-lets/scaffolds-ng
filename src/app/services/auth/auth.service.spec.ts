import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

describe('Services => AuthService', () => {
  let service: AuthService;
  let cookie: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers: [CookieService],
    });
    service = TestBed.inject(AuthService);
    cookie = TestBed.inject(CookieService);
    cookie.deleteAll();
  });
  function login() {
    service.login();
  }
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('user should be recongized as logged in', () => {
    login();
    expect(service.isLoggedIn()).toBeTrue();
  });
  it('user shoud be recongnized as NOT logged in', () => {
    expect(service.isLoggedIn()).toBeFalse();
  });
  it('user login should set cookie', () => {
    spyOn(cookie,'set');
    service.login();
    expect(cookie.set).toHaveBeenCalled();
  });
});
