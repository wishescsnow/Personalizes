import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './auth.service'

@Component({
    selector: 'login',
    providers: [ AuthenticationService ],
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    constructor(private _service: AuthenticationService) {}

    ngOnInit() {
        this._service.checkAuthenticate();
    }

    login(formData) {
        if(formData.valid) {
            this._service.login(formData.value.email, formData.value.password);
        }
    }
}