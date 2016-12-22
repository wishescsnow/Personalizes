import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';

import { UndoListsComponent } from './undo-lists.component';

@NgModule({
  imports:      [
      CommonModule,
      MaterialModule
  ],
  declarations: [
    UndoListsComponent
  ],
  exports:      [ UndoListsComponent ]
})

export class UndoListsModule { }