import { Component, OnInit } from '@angular/core';
import { PlacesService } from "../places.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  constructor(private placeService:PlacesService,
    private router:Router) { }

  ngOnInit() {
  }
  saveNewPlace(title,imgURL,description)
  {
    const titulo = title.value;
    const img = imgURL.value;
    const desc = description.value;
    this.placeService.newPlace(titulo,img,desc);
    this.router.navigate(['/places'])
  }
}
