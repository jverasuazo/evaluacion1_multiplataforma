import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor() { }

  ngOnInit() {
    //no logre generar mi propio token porque me pedia ingresar una tarjeta de credito
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1Ijoic29sZGllcmhlYWQiLCJhIjoiY2xsd2lkdmcwMGhjZzNnbnNkZWFkNHh3ZyJ9.7uE86t38ERr4ItEamH7Kkg'

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 9
    })
  }

}
