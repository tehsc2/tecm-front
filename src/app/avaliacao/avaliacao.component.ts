import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { Avaliacao } from './avaliacao';
import { AvaliacaoService } from './avaliacaoService';
import { Aula } from '../aula/aula';
import { Usuario } from '../cadastro/usuario';
import { Marker, MarkerInterface } from '../map/marker';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styles: [`
  .star {
    position: relative;
    display: inline-block;
    font-size: 3rem;
    color: #d3d3d3;
  }
  .full {
    color: red;
  }
  .half {
    position: absolute;
    display: inline-block;
    overflow: hidden;
    color: red;
  }
  .btn-tcm {
    color: #fff;
    border-radius: 10px;
    background-color: #3f51b5;
    font-weight: 500;
  }
`]
})
export class AvaliacaoComponent implements OnInit {
  currentRate = 0;
  avaliacao: Avaliacao;
  idAula: number;
  usuario: Usuario;
  markers: MarkerInterface[];

  constructor(private avaliacaoService: AvaliacaoService) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.idAula = JSON.parse(localStorage.getItem('idAulaSelecionada'));
    console.log('ID AULA: ' + this.idAula);
  }

  avaliarAula(){
    this.avaliacao = new Avaliacao();
    this.avaliacao.aula_id = this.idAula;
    this.avaliacao.usuario_id = this.usuario.id;
    this.avaliacao.nota = this.currentRate;

    console.log('AVALIACAO: ' + this.avaliacao);
    this.avaliacaoService.salvarAvaliacao(this.avaliacao);
    localStorage.removeItem('aulaSelecionada');
    this.markers = JSON.parse(localStorage.getItem('markers'));

    this.markers = this.markers.filter(
      mark => mark.aula.id !== this.avaliacao.aula_id);

    localStorage.setItem('markers', JSON.stringify(this.markers));
  }

}
