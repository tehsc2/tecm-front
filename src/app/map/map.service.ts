import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MarkerInterface, Marker } from './marker';
import { Usuario } from '../cadastro/usuario';
import { Localizacao } from './localizacao';

@Injectable()
export class MapService implements OnInit{

  private url = 'http://localhost:8083/recomendacao/';
  private urlLocalizacao = 'http://localhost:8086/localizacao';
  user: Usuario;

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };


  constructor(private conexaoApi: HttpClient) {
  }

  ngOnInit(){
  }

  listarAulasRecomendadas(id: number) {
      return this.conexaoApi.get<MarkerInterface[]>(this.url + id);
  }

  salvarLocalizacaoUsuario(localizacao): void{
    console.log('LOCALIZACAO: ' + localizacao);
    this.conexaoApi.post(this.urlLocalizacao + '/salvar', localizacao, this.options).subscribe();
  }
}
