
export class AulaVO {
  id = 0;
  usuario_id = 0;
  titulo = '';
  descricao = '';
  duracao = '';
  preco = 0.0;

  public constructor(init?: Partial<AulaVO>) {
    Object.assign(this, init);
  }

}
