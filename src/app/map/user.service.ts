import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MarkerInterface, Marker } from './marker';
import { Usuario } from '../cadastro/usuario';
import { Localizacao } from './localizacao';

@Injectable()
export class UserServiceUser implements OnInit{

  private url = 'http://localhost:8080/usuario/';

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };


  constructor(private conexaoApi: HttpClient) {
  }

  ngOnInit(){
  }

  getInstrutor(idInstrutor: number) {
      return this.conexaoApi.get<Usuario>(this.url + idInstrutor);
  }
}
