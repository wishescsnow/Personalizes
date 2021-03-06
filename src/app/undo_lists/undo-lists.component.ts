import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UndoItem } from './undo-item';

@Component({
    selector: 'undo-lists',
    templateUrl: './undo-lists.component.html',
    styleUrls: ['./undo-lists.component.scss']
})

export class UndoListsComponent {
    undoItems: FirebaseListObservable<UndoItem[]>;
    categories: any[];
    selectedItem : FirebaseObjectObservable<UndoItem>;

    constructor(private _af: AngularFire, private modalService: NgbModal) {
        this.undoItems = _af.database.list('/undoItems');
        _af.database.list('/categories').subscribe(
            categories => (
                this.categories = categories
            )
        );
    }

    getCardColor(category: string) {
        if(category.toUpperCase() === 'PERSONAL')
            return "md-card-personal";
        else if(category.toUpperCase() === 'WORK')
            return "md-card-work";
        else if(category.toUpperCase() === 'CRITICAL')
            return "md-card-critical";
        else if(category.toUpperCase() === 'DAILY')
            return "md-card-daily";
        else if(category.toUpperCase() === 'WEEKLY')
            return "md-card-weekly";
        else if(category.toUpperCase() === 'MONTHLY')
            return "md-card-monthly";
        else
            return "md-card-default";
    }
    
    getCardIcon(category: string) {
        if(category.toUpperCase() === 'PERSONAL')
            return "../app/resources/images/critical.jpg";
        else if(category.toUpperCase() === 'WORK')
            return "../app/resources/images/critical.jpg";
        else if(category.toUpperCase() === 'CRITICAL')
            return "../app/resources/images/critical.jpg";
        else if(category.toUpperCase() === 'DAILY')
            return "../app/resources/images/critical.jpg";
        else if(category.toUpperCase() === 'WEEKLY')
            return "../app/resources/images/critical.jpg";
        else if(category.toUpperCase() === 'MONTHLY')
            return "../app/resources/images/critical.jpg";
        else
            return "../app/resources/images/critical.jpg";
    }

    listChanged(event: any) {
        this.undoItems = this._af.database.list('/undoItems', {
            query: {
                orderByChild: 'category',
                equalTo: event.value
            }
        });
    }

    openUndoCard(content: any, undoItem?: FirebaseObjectObservable<UndoItem>) {
        this.selectedItem = undoItem;
        this.modalService.open(content);
    }

    saveUndoItem(key: string, newTitle: string, newCategory: string, newDesc: string) {
        this._af.database.list('/undoItems').update(key, {
            title: newTitle,
            category: newCategory,
            desc: newDesc,
        })
        .then(_ => {
            console.log('Save successfully.');
        })
        .catch(err => console.error(err, 'Error occurred while saving.'));
    }

    insertUndoItem(newTitle: string, newCategory: string, newDesc: string) {
        this.undoItems.push({
            title: newTitle,
            category: newCategory,
            desc: newDesc,
            dateCommence: new Date().toJSON(),
            deadline: new Date().toJSON()
        })
        .then(_ => {
            console.log('Insert successfully.');
        })
        .catch(err => console.error(err, 'Error occurred while inserting.'));
    }

    deleteUndoItem(key: string) {
        this.undoItems.remove(key)
        .then(_ => {
            console.log('Delete successfully.');
        })
        .catch(err => console.error(err, 'Error occurred while deleting.'));
    }
}