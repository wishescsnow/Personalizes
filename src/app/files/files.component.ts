import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FilesData } from './files-data';

@Component({
    selector: 'files',
    templateUrl: './files.component.html',
    styleUrls: ['./files.component.scss']
})

export class FilesComponent {
    files: FirebaseListObservable<FilesData[]>;
    selectedRecord: FirebaseObjectObservable<FilesData>;
    addFlag: Boolean;

    constructor(private af: AngularFire, private modalService: NgbModal) {
        this.files = af.database.list('/filesData');
        this.addFlag = false;
    }

    toggleRecord() {
        this.addFlag = !this.addFlag;
    }

    confirmDelete(content: any, record?: FirebaseObjectObservable<FilesData>) {
        this.selectedRecord = record;
        this.modalService.open(content);
    }

    saveRecord(newSite: string, newUser: string, newPass: string, key?: string) {
        if(key){
            this.af.database.list('/filesData').update(key, {
                site: newSite,
                username: newUser,
                password: newPass,
            })
            .then(_ => {
                console.log('Save successfully.');
            })
            .catch(err => console.error(err, 'Error occurred while saving.'));
        }
        else
        {
            this.files.push({
                site: newSite,
                username: newUser,
                password: newPass
            })
            .then(_ => {
                console.log('Insert successfully.');
            })
            .catch(err => console.error(err, 'Error occurred while inserting.'));
            this.addFlag = false;
        }
    }

    deleteRecord(key: string) {
        this.files.remove(key)
        .then(_ => {
            console.log('Delete successfully.');
        })
        .catch(err => console.error(err, 'Error occurred while deleting.'));
    }
}