import { Instrutor } from '../map/instrutor';

export interface AulaInterface {
  id: number;
  usuario_id: number;
  titulo: string;
  descricao: string;
  duracao: string;
  preco: number;
}

export class Aula {
  id = 0;
  usuario_id = 0;
  titulo = '';
  descricao = '';
  duracao = '';
  preco = 0.0;

  constructor(usuario_id: number, titulo: string, descricao: string, duracao: string, preco: number){
    this.usuario_id = usuario_id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.duracao = duracao;
    this.preco = preco;
  }
}
