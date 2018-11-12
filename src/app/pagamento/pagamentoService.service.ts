import { Injectable, OnInit } from "../../../node_modules/@angular/core";
import { HttpHeaders, HttpClient } from "../../../node_modules/@angular/common/http";

@Injectable()
export class PagamentoService implements OnInit{

  private url = 'http://localhost:8088/pagamento';

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };


  constructor(private conexaoApi: HttpClient) {
  }

  ngOnInit(){
  }

  
}
