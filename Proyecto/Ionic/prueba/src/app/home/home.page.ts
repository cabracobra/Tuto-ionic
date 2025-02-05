import { Component } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  photos = [];
  constructor(
    private photosService:PhotosService,

  ) {}
    ngOnInit()
    {
      this.photosService.getphotos().subscribe(data =>{ this.photos = data;console.log(data)})
    }
}
