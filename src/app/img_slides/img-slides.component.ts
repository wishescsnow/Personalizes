import { Component, OnInit } from '@angular/core'

import { Image } from './image'
import { ImageService } from './image.service'

@Component({
    selector: 'img-slides',
    templateUrl: './img-slides.component.html',
    styleUrls: [ './img-slides.component.scss' ]
})

export class ImgSlidesComponent {
    imgSlides: Image[];

    constructor(private _imgSlideService: ImageService) { }

    ngOnInit(): void{
        this.getImages();
    }

    getImages(): void {
        this._imgSlideService.getImages().then(imgSlides => this.imgSlides = imgSlides);
    }
}