import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../login/auth.guard';

import { HomeComponent } from './home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from '../profile/profile.component';
import { TasksComponent } from '../tasks/tasks.component';
import { FilesComponent } from '../files/files.component';
import { MoneyComponent } from '../money/money.component';
import { EntertainmentComponent } from '../entertainment/entertainment.component';

const routes: Routes = [
    { path: 'home', redirectTo: 'home/dashboard', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'tasks',
                component: TasksComponent
            },
            {
                path: 'files',
                component: FilesComponent
            },
            {
                path: 'money',
                component: MoneyComponent
            },
            {
                path: 'entertainment',
                component: EntertainmentComponent
            },
        ],
        canActivate: [ AuthGuard ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    providers: [ AuthGuard ],
    exports: [ RouterModule ]
})

export class HomeRoutingModule {}