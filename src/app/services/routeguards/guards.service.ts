import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from "ngx-cookie-service";
import { environment } from "../../../environments/environment";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GuardsService implements CanActivate {

    public breadCrumbs: Subject<Array<string>> = new Subject<Array<string>>();

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
            console.log(route); console.log(state);


            this.breadCrumbs.next(state.url.split('/'));
            return true;
        } else {
            this.route.navigate(["/auth"]);
        }

    }

    bindBreadCrumbs() {
        return this.breadCrumbs.asObservable();
    }
}
