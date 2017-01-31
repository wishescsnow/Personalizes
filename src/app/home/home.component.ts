import { Component } from '@angular/core';
import { AuthenticationService } from '../login/auth.service'

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [ AuthenticationService ],
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    constructor(private _service: AuthenticationService) {}

    logOut() {
        this._service.logout();
    }
}