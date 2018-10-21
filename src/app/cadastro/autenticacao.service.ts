import { Injectable } from "../../../node_modules/@angular/core";
import { Usuario } from "./usuario";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { Observable } from "../../../node_modules/rxjs";
import { Router } from "../../../node_modules/@angular/router";
import { MapService } from "../map/map.service";
import { MapComponent } from "../map/map.component";

@Injectable()
export class AutenticacaoService{
    ///ec2-13-59-220-29.us-east-2.compute.amazonaws.com
    private url = 'http://localhost:8080/usuario';

    constructor(private http: HttpClient, private router: Router) {}
  
    salvarUsuario(usuario: Usuario): void {
        console.log(this.url);
        console.log(usuario || JSON);
        this.http.put(this.url, usuario || JSON).subscribe(
            data => {
                console.log("PUT Request is successful ", data);
                localStorage.setItem('usuario', JSON.stringify(data));
                this.router.navigate(['/home']);
            },
            error => {
                alert("Error" + error);
            });
    }
}