import { Component, OnInit } from '@angular/core';
import { PlacesService } from "./places.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
  places = [];
  constructor(
    private placesService:PlacesService, 
    private router:Router,
     ) { }

  ngOnInit() {
    this.places = this.placesService.getPlaces();
    console.log(this.places);
  }
 addNewPlace()
 {
   this.router.navigate(['/place-add']);
 }
 goHome()
 {
   this.router.navigate(['/home']);
 }
}
