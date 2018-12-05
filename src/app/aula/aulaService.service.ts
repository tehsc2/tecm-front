import { Injectable } from '../../../node_modules/@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Router } from '../../../node_modules/@angular/router';
import { MapService } from '../map/map.service';
import { MapComponent } from '../map/map.component';
import { Aula } from './aula';

@Injectable()
export class AulaService{
    private url = 'http://localhost:8081/aula';

    constructor(private http: HttpClient, private router: Router) {}

    excluirAula(idAula: number): void {
      console.log('Excluindo a aula: ' + idAula);
      this.http.delete(this.url.concat('/' + idAula)).subscribe(
        data => {
          console.log('DELETADA COM SUCESSO');
          alert('Aula deletada!');
        },
        error => {
          alert('Erro ao deletar: ' + error);
        }
      );
    }

    salvarAula(aula: Aula): void {
        console.log(aula || JSON);
        this.http.put(this.url, aula || JSON).subscribe(
            data => {
                console.log('PUT Request is successful ', data);
                this.router.navigate(['/aulas']);
            },
            error => {
                alert('Error' + error);
            });
    }

    recuperaAulas(userId: number) {
       return this.http.get<Aula[]>(this.url.concat('/usuario/' + userId));
    }

    recuperarAulaById(id: number) {
        return this.http.get<Aula>(this.url.concat('/' + id));
    }

    recuperaAulasDaArea(userId: number, area: string, busca: string){
        return this.http.get<Aula[]>(this.url + '/' + userId + '/area/' + area + '/' + busca);
    }
}
