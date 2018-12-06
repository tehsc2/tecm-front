import { Injectable } from '../../../node_modules/@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Router } from '../../../node_modules/@angular/router';
import { Aula } from './aula';

@Injectable()
export class AulaService{
    private url = 'http://localhost:8081/';

    constructor(private http: HttpClient, private router: Router) {}

    recuperaSala(userId: number){
        return this.http.get(this.url.concat('salaAula/' + userId));
    }

    excluirAula(idAula: number): void {
      console.log('Excluindo a aula: ' + idAula);
      this.http.delete(this.url.concat('aula/' + idAula)).subscribe(
        data => {
          console.log('DELETADA COM SUCESSO');
          alert('Aula deletada!');
        },
        error => {
          alert('Erro ao deletar: ' + error);
        }
      );
    }

    ingressaSala(idAula: number, idUsuario: number) {
        const json = {
            usuario_id: idUsuario, aula_id: idAula };
        console.log(json || JSON)

      return this.http.post<Aula>(this.url.concat('salaAula'), json || JSON, );
    }

    sairSala(aulaId: number){
        this.http.delete(this.url.concat('/salaAula/' + aulaId)).subscribe(
            data => {
              console.log('SAIU DA SALA COM SUCESSO');
            },
            error => {
              console.log('Erro ao sair da sala');
            }
          );;
    }

    salvarAula(aula: Aula): void {
        console.log(aula || JSON);
        this.http.put(this.url.concat('aula'), aula || JSON).subscribe(
            data => {
                console.log('PUT Request is successful ', data);
                this.router.navigate(['/aulas']);
            },
            error => {
                alert('Error' + error);
            });
    }

    recuperaAulas(userId: number) {
       return this.http.get<Aula[]>(this.url.concat('aula/usuario/' + userId));
    }

    recuperarAulaById(id: number) {
        return this.http.get<Aula>(this.url.concat('aula/' + id));
    }

    recuperaAulasDaArea(userId: number, area: string, busca: string){
        return this.http.get<Aula[]>(this.url + 'aula/' + userId + '/area/' + area + '/' + busca);
    }
}
