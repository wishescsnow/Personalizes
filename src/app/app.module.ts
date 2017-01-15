import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';
import { HomeModule } from './home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig, firebaseAuthConfig } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import 'hammerjs';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HomeModule,
        AppRoutingModule,
        NgbModule.forRoot(),
        MaterialModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
