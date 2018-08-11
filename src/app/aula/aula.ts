import { Instrutor } from '../instrutor/instrutor';

interface AulaInterface {
  titulo: string;
  curso: string;
  duracao: string;
  preco: number;
  instrutor: Instrutor;
}

export class Aula {
  titulo = '';
  curso = '';
  duracao = '';
  preco = 0.0;
  instrutor = new Instrutor();

  constructor(titulo: string, curso: string, duracao: string, preco: number, instrutor: Instrutor) {
    this.titulo = titulo;
    this.curso = curso;
    this.duracao = duracao;
    this.preco = preco;
    this.instrutor = instrutor;
  }
}
