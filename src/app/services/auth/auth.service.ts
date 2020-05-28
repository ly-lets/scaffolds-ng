import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cookie: CookieService) {}

  isLoggedIn() {
    console.log('Token Check', this.cookie.check(environment.userTokenKey));

    return this.cookie.check(environment.userTokenKey);
  }

  login(): Observable<any> {
    const expireAt = moment().add(1, 'minutes').toDate();
    this.cookie.set(environment.userTokenKey, 'USER_IDENTITY_VAL');
    // this.cookie.set(
    //   environment.userTokenKey,
    //   'USER_IDENTITY_VAL',
    //   expireAt,
    //   '/',
    //   '',
    //   true,
    //   'Lax'
    // );
    console.log('login in');
    return of({ status: 'ok' });
  }
}
