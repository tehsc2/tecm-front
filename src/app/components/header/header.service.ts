import { Injectable } from '@angular/core';
import { HeaderModel } from './header.model';

@Injectable()
export class HeaderService {

  header: HeaderModel;

  constructor() {}

  createHeader(nome: string, foto: string, status: boolean) {
    this.header = new HeaderModel();
    this.header.nome = nome;
    this.header.foto = foto;
    this.header.status = status;
  }
}
