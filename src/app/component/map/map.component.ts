import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { LeafletDirective, LeafletModule } from '@bluehalo/ngx-leaflet';
import { featureGroup, icon, latLng, LatLngBounds, marker, Marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    LeafletModule
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit, AfterViewInit {
  @Input() mapData: { latitude: number, longitude: number }[] = [];
  @ViewChild(LeafletDirective) leafletDirective!: LeafletDirective;

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

  ngAfterViewInit() {
    setTimeout(() => {
      const map = this.leafletDirective.getMap();
      if (map) {
        map.invalidateSize();
      }
    }, 1000);
  }

  computeMapOptions() {
    this.mapData.forEach((data) => {
      this.markers.push(marker([ data.latitude, data.longitude ], { icon: this.defaultIcon }));
    });

    this.bounds = featureGroup(this.markers).getBounds();

    this.options = {
      center: latLng(this.mapData.at(0)!.latitude, this.mapData.at(0)!.longitude),
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
        ...this.markers
      ],
      zoom: 10,
    };
  }
}
