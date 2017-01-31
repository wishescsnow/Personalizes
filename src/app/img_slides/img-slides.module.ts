import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ng2-bootstrap/carousel';

import { ImgSlidesComponent } from './img-slides.component';
import { ImageService } from './image.service';

@NgModule({
  imports:      [
      CommonModule,
      CarouselModule.forRoot()
  ],
  declarations: [
      ImgSlidesComponent
  ],
  exports:      [ ImgSlidesComponent ],
  providers:    [ ImageService ]
})

export class ImgSlidesModule { }