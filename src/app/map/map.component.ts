import { Component, OnInit, Input } from '@angular/core';
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
import { UserServiceUser } from './user.service';
import { routerNgProbeToken } from '../../../node_modules/@angular/router/src/router_module';
import { Router } from '../../../node_modules/@angular/router';
import { AulaService } from '../aula/aulaService.service';

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

  aula: Aula;

  saldo: number;

  user: Usuario;

  @Input() instrutor: Usuario = new Usuario();

  location: any = {};

  localizacao: Localizacao;

  usuario: UsuarioMarkerInterface;

  infoWindowOpened = null;

  constructor(private aulaService: AulaService, private modalService: NgbModal, private recomendacaoService: RecomendacaoService, private header: HeaderService, private mapService: MapService, private userService: UserServiceUser, private route: Router) {

  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('usuario'));
    localStorage.removeItem('outraAulaSelecionada');
    localStorage.removeItem('idAulaSelecionada');

    this.mapClicked();
    // userId = pega o usuario da sessao
    // zoom do mapa
    this.zoom = 15;
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

  openVerticallyCentered(content, idInstrutor: number) {
    console.log('ID INSTRUTOR: ' + idInstrutor);

    this.userService.getInstrutor(idInstrutor).subscribe(
      data => {
          this.instrutor = data;
      }
    );

    setTimeout(() => {
      this.modalService.open(content, { centered: true });
    }, 2000);
  }

  ingressaAula(marker: MarkerInterface){
    this.aulaService.ingressaSala(marker.aula.id, this.usuario.userId).subscribe(
      data => {
        this.aula = data;

        if(this.saldo === 0.0 || this.aula.preco > this.saldo){
          alert("Você não possui saldo suficiente");
          this.route.navigate(['/pagamento']);
          this.aulaService.sairSala(this.aula.id);
        }else{
          this.saldo = this.saldo - this.aula.preco;
          localStorage.setItem('saldo', JSON.stringify(this.saldo));
          console.log('SALDO ATUAL: ' +  this.saldo);
          localStorage.removeItem('outraAulaSelecionada');
          localStorage.setItem('aulaSelecionada', JSON.stringify(this.aula));
          localStorage.setItem('block', 'true');
          location.reload();

          setTimeout(() => {
            console.log('Aguardando...');
          }, 500);
          this.route.navigate(['/timer']);
        }
      },
      error => {
        alert('Erro ao ingressar na aula' + error);
      }
    );
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
    if(this.user !== undefined){
      this.getRecomendacoes();
    }
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

  getRecomendacoes(){
    this.mapService.listarAulasRecomendadas(this.user.id).subscribe(
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
        }, 5000);
  }
}
