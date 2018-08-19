import { DecimalPipe } from '../../../node_modules/@angular/common';

interface InstrutorInterface {
  nome: string;
  curso: string;
  datacriacao: string;
  avaliacao: string;
}

export class Instrutor {
  nome = '';
  curso = '';
  datacriacao = '';
  avaliacao = '0.0';

  constructor(nome: string, curso: string, datacriacao: string, avaliacao: string) {
   this.nome = nome;
   this.curso = curso;
   this.datacriacao = datacriacao;
   this.avaliacao = avaliacao;
  }
}
