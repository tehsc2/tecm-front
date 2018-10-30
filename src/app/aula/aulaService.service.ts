import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { Observable } from "../../../node_modules/rxjs";
import { Router } from "../../../node_modules/@angular/router";
import { MapService } from "../map/map.service";
import { MapComponent } from "../map/map.component";
import { Aula } from "./aula";

@Injectable()
export class AulaService{
    ///ec2-13-59-220-29.us-east-2.compute.amazonaws.com
    private url = 'http://localhost:8081/aula';

    constructor(private http: HttpClient, private router: Router) {}
  
    salvarAula(aula: Aula): void {
        console.log(aula || JSON);
        this.http.put(this.url, aula || JSON).subscribe(
            data => {
                console.log("PUT Request is successful ", data);
                this.router.navigate(['/aulas']);
            },
            error => {
                alert("Error" + error);
            });
    }

    recuperaAulas(userId: number) {
       return this.http.get<Aula[]>(this.url.concat('/usuario/' + userId));
    }

    recuperarAulaById(id: number) {
        return this.http.get<Aula>(this.url.concat('/' + id));
    }
}