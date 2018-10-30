
export class AulaVO {
  id = 0;
  usuario_id = 0;
  titulo = '';
  descricao = '';
  duracao = '';
  preco = 0.0;
  status = '';

  public constructor(init?: Partial<AulaVO>) {
    Object.assign(this, init);
  }

}
