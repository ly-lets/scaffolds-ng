import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from "ngx-cookie-service";
import { environment } from "../../../environments/environment";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GuardsService implements CanActivate {
    constructor(
        private cookie: CookieService,
        private route: Router
    ) {
        // this.breadCrumbs.next([]);

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //1-check cookie for disclaimer redirection
        //route.routeConfig.path
        if (this.cookie.get(environment.userLoginCookieKey)) {
            return true;
        } else {
            this.route.navigate(["/auth"]);
        }

    }

     
}
