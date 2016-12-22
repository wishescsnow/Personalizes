import { Injectable } from '@angular/core';

import { Image } from './image';
import { IMAGES } from './img-data'

@Injectable()
export class ImageService {
    getImages(): Promise<Image[]> {
        return Promise.resolve(IMAGES);
    }
}