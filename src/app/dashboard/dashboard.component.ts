import { Component } from '@angular/core'
import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours
} from 'date-fns';
import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent
} from 'angular-calendar';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ 
        './dashboard.component.scss', 
        './undo-card.component.scss',
        './card.component.scss'
    ]
})

export class DashboardComponent {
    // Doughnut chart
    private doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    private doughnutChartData:number[] = [350, 450, 100, 350, 450, 100];
    private doughnutChartType:string = 'doughnut';
    //private doughnutChartColor:any[] = [{ backgroundColor: ["#B39DDB", "#9FA8DA", "#CE93D8", "#7E57C2", "#B198DE", "#95A0DE", "#CD89D8"] }];
    private doughnutChartOptions = {
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        title: {
            display: true,
            position: 'bottom',
            fontSize: 18,
            fontFamily: 'sans-serif',
            fontColor: '#000',
            text: 'Custom Chart Title'
        }
    };

    //Calendar events
    private viewDate: Date = new Date();
    private events: CalendarEvent[] =[];
}