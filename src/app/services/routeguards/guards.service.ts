import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class GuardsService implements CanActivate {


    isagreed: string = '';
    constructor(
    ) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //1-check cookie for disclaimer redirection
        //route.routeConfig.path

        return true;
    }
}
