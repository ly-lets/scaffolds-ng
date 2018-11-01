import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { CookieService } from "ngx-cookie-service";
import { environment } from "../../environments/environment";
import { Router, Route } from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {

  validateForm: FormGroup;


  constructor(private fb: FormBuilder, private cookie: CookieService, private route: Router) {
  }

  ngOnInit(): void {
    if (this.cookie.get(environment.userLoginCookieKey)) {
      this.route.navigate(["/coolname/dash"]);
    }
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      this.cookie.set(environment.userLoginCookieKey, "USER_IDENTITY_VAL");
      this.route.navigate(["/coolname/dash"]);
    }
  }
}
