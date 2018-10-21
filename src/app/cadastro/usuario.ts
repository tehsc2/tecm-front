export class Usuario {

    area: string;
    conta: string;
    curso: string;
    email: string;
    empresa: string;
    id: number;
    idade: number;
    nome: string;
    profissao: string;
    senha: string;
    sexo: string;
    universidade: string;

    public constructor(init?: Partial<Usuario>) {
        Object.assign(this, init);
    }

}