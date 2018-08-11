import { Component, OnInit } from '@angular/core';
import { MouseEvent, AgmInfoWindow } from '@agm/core';
import { MarkerInterface } from './marker';
import { Aula } from '../aula/aula';
import { UsuarioMarkerInterface, UsuarioMarker } from './usuarioMarker';
import { Instrutor } from '../instrutor/instrutor';
import { DOCUMENT } from '../../../node_modules/@angular/platform-browser';
import { _document } from '../../../node_modules/@angular/platform-browser/src/browser';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  user: number;
  zoom: number;
  // google maps zoom level
  lat: number;
  lng: number;
  markers: MarkerInterface[];

  usuario: UsuarioMarkerInterface;

  infoWindowOpened = null;

  constructor() { }

  ngOnInit() {
    // userId = pega o usuario da sessao
    this.user = 1;
    // zoom do mapa
    this.zoom = 17.8;
    // latitude inicial = localizacao atual
    this.lat = -23.5519104;
    // longitude inicial = localizacao atual
    this.lng = -46.5997832;

    // lista que vai fazer o get para recuperar as aulas recomendadas
    this.markers = [
      {
        lat: -23.5512998,
        lng: -46.5974544,
        // colocar um icone no lugar do label
        label: 'A',
        draggable: false,
        aula: new Aula('Scrum em 30 minutos!', 'TI', '30 m', 30.00, new Instrutor())
      },
      {
        lat: -23.5519816,
        lng: -46.5977289,
        label: 'B',
        draggable: false,
        aula: new Aula('Direito Penal Básico', 'Direito', '1 h', 35.00, new Instrutor())
      },
      {
        lat: -23.55196,
        lng: -46.5972715,
        label: 'C',
        draggable: false,
        aula: new Aula('Excel Básico', 'TODOS', '1 h', 20.00, new Instrutor())
      }
    ];

    this.usuario = new UsuarioMarker(this.user, this.markers);
  }

  // Fecha a info window se for abrir outra
  clickedMarker(infoWindow: AgmInfoWindow) {
    if (this.infoWindowOpened ===  infoWindow ) {
      return;
    }
    if (this.infoWindowOpened !== null) {
      this.infoWindowOpened.close();
    }
    this.infoWindowOpened = infoWindow;
  }

  // Atualizar a lista de aulas?
  mapClicked() {
    console.log('FORA DO MAPA');
    const ht = document.getElementsByClassName('agm-info-window-content');
    console.log(ht);
  }

  markerDragEnd(m: MarkerInterface, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}
