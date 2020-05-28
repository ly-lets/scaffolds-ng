import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  inject,
} from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../home/home.component';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const routerSpy = {
  navigate: jasmine.createSpy('navigate'),
};

const testUserData = { userName: 't', password: 'TekLoon' };
const loginResult = 'OK';

describe('Component => Login ', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LoginComponent],
      providers: [
        FormBuilder,
        AuthService,
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthService);
    fixture.detectChanges();
  });
  function updateForm(userEmail, userPassword) {
    component.validateForm.controls['userName'].setValue(userEmail);
    component.validateForm.controls['password'].setValue(userPassword);
  }
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form value should update from form changes', fakeAsync(() => {
    updateForm(testUserData.userName, testUserData.password);
    expect(component.validateForm.valid).toEqual(true);
  }));
  it('form value should be false from form changes', fakeAsync(() => {
    updateForm(testUserData.userName, '');
    expect(component.validateForm.valid).toEqual(false);
  }));
  it('form submit should call auth service', fakeAsync(() => {
    spyOn(authService, 'login').and.callThrough();
    updateForm(testUserData.userName, testUserData.password);
    component.submitForm();
    expect(authService.login).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/nga']);
  }));
  it('invalid form submit should NOT call auth service', fakeAsync(() => {
    spyOn(authService, 'login').and.callThrough();
    component.submitForm();
    expect(authService.login).toHaveBeenCalledTimes(0);
  }));
});
