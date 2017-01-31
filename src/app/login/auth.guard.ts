import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private _af: AngularFire, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this._af.auth.map((auth) =>  {
            if(auth == null) {
                this.router.navigate(['/login']);
                return false;
            } else {
                return true;
            }
        }).first()
    }
}