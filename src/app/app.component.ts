import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  getImageUrl(imageId) {
    return `https://picsum.photos/100?image=${imageId}`;
  }
}
