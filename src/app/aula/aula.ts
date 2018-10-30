export interface AulaInterface {
  id: number;
  usuario_id: number;
  titulo: string;
  descricao: string;
  duracao: string;
  preco: number;
  status: string;
}

export class Aula {
  id = 0;
  usuario_id = 0;
  titulo = '';
  descricao = '';
  duracao = '';
  preco = 0.0;
  status = '';

  constructor(usuario_id: number, titulo: string, descricao: string, duracao: string, preco: number, status: string){
    this.usuario_id = usuario_id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.duracao = duracao;
    this.preco = preco;
    this.status = status;
  }
}
