import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place:Place; //declaro variable place con clase Place 
  constructor(private activatedRoute:ActivatedRoute, private placeService:PlacesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        const recipeID = paramMap.get('placeID') // el mismo que está en app-routing module
        this.place = this.placeService.getPlace(recipeID) // añado a la variable place los datos obtenidos por la funcion getplace (datos de un unico lugar)

      }
    )
  }

  
}
