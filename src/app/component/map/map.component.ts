import { Component, Input, OnInit } from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { icon, latLng, marker, tileLayer, Marker, featureGroup, LatLngBounds, FeatureGroup, TileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    LeafletModule
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {
  @Input() mapData: { lat: number, lng: number }[] = [];

  defaultIcon = icon({
    iconSize: [ 25, 41 ],
    iconAnchor: [ 13, 41 ],
    iconUrl: 'leaflet/marker-icon.png',
    shadowUrl: 'leaflet/marker-shadow.png'
  })

  options: any;

  markers: Marker<any>[] = [];
  bounds: LatLngBounds | undefined;

  ngOnInit() {
    this.computeMapOptions();
  }

  computeMapOptions() {
    this.mapData.forEach((data) => {
      this.markers.push(marker([ data.lat, data.lng ], { icon: this.defaultIcon }));
    });

    this.bounds = featureGroup(this.markers).getBounds();

    this.options = {
      center: latLng(this.mapData.at(0)!.lat, this.mapData.at(0)!.lng),
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
        ...this.markers
      ],
      zoom: 10,
    };
  }
}
