import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import 'rxjs/add/operator/map';
 
@Injectable()
export class AuthenticationService {
    constructor(private _af: AngularFire, private _router: Router) { }

    logout() {
        this._af.auth.logout();
        this._router.navigate(['/login']);
    }

    login(email, password) {
        this._af.auth.login({ email: email, password: password })
            .then((success) => {
                this._router.navigate(['/home']);
            })
            .catch((error) => {
                console.log("Firebase failure: " + JSON.stringify(error));
            });
    }

    checkAuthenticate() {
        this._router.navigate(['/home']);
        // this._af.auth.subscribe((auth) => {
        //     if(auth !== null) {
        //         this._router.navigate(['/home']);
        //     }
        // })
    }
}