import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { Router } from "../../../node_modules/@angular/router";
import { Avaliacao } from "./avaliacao";

@Injectable()
export class AvaliacaoService{
    ///ec2-13-59-220-29.us-east-2.compute.amazonaws.com
    private url = 'http://localhost:8082/avaliacao';

    constructor(private http: HttpClient, private router: Router) {}
  
    salvarAvaliacao(avaliacao: Avaliacao): void {
        console.log(this.url);
        console.log(avaliacao || JSON);
        this.http.post(this.url, avaliacao || JSON).subscribe(
            data => {
                console.log("POST Request is successful ", data);
                localStorage.setItem('avaliacao', JSON.stringify(data));
                //this.router.navigate(['/home']);
            },
            error => {
                alert("Error" + error);
            });
    }
}