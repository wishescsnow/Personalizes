import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';

import { FilesComponent } from './files.component'

@NgModule({
  imports:      [
      CommonModule,
      MaterialModule
  ],
  declarations: [
      FilesComponent
  ],
  exports:      [ FilesComponent ]
})

export class FilesModule { }