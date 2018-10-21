import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { Observable } from "../../../node_modules/rxjs";
import { Router } from "../../../node_modules/@angular/router";
import { Aula } from "../aula/aula";

@Injectable()
export class RecomendacaoService{

    private url = 'http://ec2-18-222-227-24.us-east-2.compute.amazonaws.com:8083/recomendacao';

    constructor(private http: HttpClient, private router: Router) {}
  
    getRecomendacoes(userId: number): Observable<Aula[]>{
        return this.http.get<Aula[]>(this.url + userId);
    }
}