import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {
  transform(images: any[]): any {
    if (!images || images.length < 1) {
      return 'assets/img/noimage.png';
    }

    return images[0].url;
  }
}
