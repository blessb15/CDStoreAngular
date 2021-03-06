import { Component, EventEmitter } from 'angular2/core';
import { AlbumListComponent } from './album-list.component';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template: `
    <div class="container">
      <h1>CD Store</h1>
      <album-list
        [albumList]="albums"
        (onAlbumSelect)="albumWasSelected($event)">
      </album-list>
    </div>
  `
})

export class AppComponent {
  public albums: Album[];
  constructor(){
    this.albums = [
      new Album("Best Album", "Bill", "Rock", 10.00, 0),
      new Album("Good Album", "Bill", "Pop", 5.00, 1),
      new Album("Alright Album", "Bill", "Jazz", 100.00, 2),
      new Album("The Album", "Bill", "Reggae", 20.00, 3)
    ];
  }
  albumWasSelected(clickedAlbum: Album): void {
    console.log('parent', clickedAlbum);
  }
}
