import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardsService {
  constructor(
    private route: Router,
    private auth: AuthService
  ) {
    // this.breadCrumbs.next([]);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.route.navigate(['/login']);
      return false;
    }
  }
}
