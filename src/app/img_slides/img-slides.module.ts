import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ng2-bootstrap';

import { ImgSlidesComponent } from './img-slides.component'
import { ImageService } from './image.service'

@NgModule({
  imports:      [
      CommonModule,
      CarouselModule
  ],
  declarations: [
      ImgSlidesComponent
  ],
  exports:      [ ImgSlidesComponent ],
  providers:    [ ImageService ]
})

export class ImgSlidesModule { }