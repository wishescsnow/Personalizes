import { Component } from '@angular/core';

import { AngularFire } from 'angularfire2';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    constructor(private af: AngularFire) {
    }

    signOut() {
        this.af.auth.logout();
        console.log('Sign out successfully!');
    }
}