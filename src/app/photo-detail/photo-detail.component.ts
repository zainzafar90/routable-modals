import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html'
})
export class PhotoDetailComponent {

  @Input() photo;

  getLargeImageUrl(imageId) {
    return `https://picsum.photos/500?image=${imageId}`;
  }

}
