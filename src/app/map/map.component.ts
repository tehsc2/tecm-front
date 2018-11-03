import { Component, OnInit } from '@angular/core';
import { MouseEvent, AgmInfoWindow } from '@agm/core';
import { MarkerInterface, Marker } from './marker';
import { UsuarioMarkerInterface, UsuarioMarker } from './usuarioMarker';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Aula } from '../aula/aula';
import { RecomendacaoService } from './recomendacaoService.service';
import { Usuario } from '../cadastro/usuario';
import { HeaderService } from '../components/header/header.service';
import { MapService } from './map.service';
import { Localizacao } from './localizacao';

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

  user: Usuario;

  location: any = {};

  localizacao: Localizacao;

  usuario: UsuarioMarkerInterface;

  infoWindowOpened = null;

  constructor(private modalService: NgbModal, private recomendacaoService: RecomendacaoService, private header: HeaderService, private mapService: MapService) {

  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('usuario'));

    this.mapClicked();
    // userId = pega o usuario da sessao
    // zoom do mapa
    this.zoom = 18;
    // latitude inicial = localizacao atual
    this.lat = -23.5519104;
    // longitude inicial = localizacao atual
    this.lng = -46.5997832;

    // this.recomendacaoService.getRecomendacoes(this.usuario.userId).subscribe(
    //   aulas => this.aulas = aulas,
    //   error => alert(error));

      this.usuario = new UsuarioMarkerInterface();

      if(this.user == null){
        this.user = JSON.parse(localStorage.getItem('usuario'));
        console.log(this.user.id);
      }
      else{
        this.usuario.userId = this.user.id;
      }

      console.log('ID USUARIO: ' + this.usuario.userId);

      this.markers = JSON.parse(localStorage.getItem('markers'));
      console.log('MARKERS SESSAO: ' + this.markers);
      if(this.markers == null){
        this.mapService.listarAulasRecomendadas(this.usuario.userId).subscribe(
          data => {
            console.log(data);
            this.markers = data;
            localStorage.setItem('markers', JSON.stringify(this.markers));
          }
        );

        setTimeout(() => {
          console.log('MARKERS: ' + this.markers);
  
        this.usuario.markers = this.markers;
        console.log(this.usuario);
        }, 12000);
      }

      this.usuario.markers = this.markers;
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

     this.localizacao = new Localizacao('' + this.lat, '' + this.lng, this.usuario.userId);
     this.mapService.salvarLocalizacaoUsuario(JSON.stringify(this.localizacao));
 }

  markerDragEnd(m: MarkerInterface, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}
