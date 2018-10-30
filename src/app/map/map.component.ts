import { Component, OnInit } from '@angular/core';
import { MouseEvent, AgmInfoWindow } from '@agm/core';
import { MarkerInterface, Marker } from './marker';
import { UsuarioMarkerInterface, UsuarioMarker } from './usuarioMarker';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Aula } from '../aula/aula';
import { RecomendacaoService } from './recomendacaoService.service';
import { Usuario } from '../cadastro/usuario';
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

      if(usuarioResponse == null){
        this.usuario.userId = 1;
      }
      else{
        this.usuario.userId = usuarioResponse.id;
      }

      this.markers = [
        {
          lat: -23.5512998,
          lng: -46.5974544,
          // colocar um icone no lugar do label
          draggable: false,
          aula: new Aula(1,
            'Scrum em 30 minutos!',
            'TI',
            '30 m',
            30.0,
            'online'
          )
        },
        {
          lat: -23.5519816,
          lng: -46.5977289,
          draggable: false,
          aula: new Aula(2,
            'Calculo I',
            'Engenharia Elétrica',
            '1 h',
            35.0,
            'online'
          )
        },
        {
          lat: -23.55196,
          lng: -46.5972715,
          draggable: false,
          aula: new Aula(3, 'Excel Básico', 'TODOS', '1 h', 20.0, 'online')
        }
      ];

      this.usuario.markers = this.markers;
      console.log(this.usuario);
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
