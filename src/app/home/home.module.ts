import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
import { ImgSlidesModule } from '../img_slides/img-slides.module';
import { UndoListsModule } from '../undo_lists/undo-lists.module';
import { FilesModule } from '../files/files.module';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from '../profile/profile.component';
import { TasksComponent } from '../tasks/tasks.component';
import { MoneyComponent } from '../money/money.component';
import { EntertainmentComponent } from '../entertainment/entertainment.component';
import { HomeComponent } from './home.component';

@NgModule({
    imports:      [
        CommonModule,
        MaterialModule,
        RouterModule,
        HomeRoutingModule,
        ImgSlidesModule,
        UndoListsModule,
        FilesModule
    ],
    declarations: [
        HomeComponent,
        DashboardComponent,
        ProfileComponent,
        TasksComponent,
        MoneyComponent,
        EntertainmentComponent
    ],
    exports:      [ HomeComponent ]
})

export class HomeModule { }