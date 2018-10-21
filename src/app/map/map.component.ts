import { Component, OnInit } from '@angular/core';
import { MouseEvent, AgmInfoWindow } from '@agm/core';
import { MarkerInterface, Marker } from './marker';
import { UsuarioMarkerInterface, UsuarioMarker } from './usuarioMarker';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Aula } from '../aula/aula';
import { RecomendacaoService } from './recomendacaoService.service';
import { Route, Router } from '../../../node_modules/@angular/router';
import { Usuario } from '../cadastro/usuario';
import { HeaderComponent } from '../components/header/header.component';
import { HeaderService } from '../components/header/header.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  closeResult: string;
  zoom: number;
  // google maps zoom level
  lat: number;
  lng: number;
  markers: MarkerInterface[];

  aulas: Aula[];

  location: any = {};

  usuario: UsuarioMarkerInterface;

  infoWindowOpened = null;

  constructor(private modalService: NgbModal, private recomendacaoService: RecomendacaoService, private header: HeaderService) {

  }

  ngOnInit() {
    let usuarioResponse = <Usuario> JSON.parse(localStorage.getItem('usuario'));
    this.header.createHeader(usuarioResponse.nome, '', true);

    this.mapClicked();
    // userId = pega o usuario da sessao
    // zoom do mapa
    this.zoom = 18;
    // latitude inicial = localizacao atual
    this.lat = -23.5519104;
    // longitude inicial = localizacao atual
    this.lng = -46.5997832;

    this.recomendacaoService.getRecomendacoes(this.usuario.userId).subscribe(
      aulas => this.aulas = aulas,
      error => alert(error));

      this.usuario = new UsuarioMarkerInterface();

      this.usuario.userId = usuarioResponse.id;
      console.log(usuarioResponse);
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  // Fecha a info window se for abrir outra
  clickedMarker(infoWindow: AgmInfoWindow) {
    if (this.infoWindowOpened === infoWindow) {
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
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => this.setPosition(pos));
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
  }

  setPosition(position) {
    console.log(position.coords);
     this.lat = position.coords.latitude;
     this.lng = position.coords.longitude;
 }

  markerDragEnd(m: MarkerInterface, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}
