import { Component, OnInit, Input } from '@angular/core';
import { AulaInterface } from '../aula/aula';
import { AulaService } from '../aula/aulaService.service';
import { Usuario } from '../cadastro/usuario';
import { FormBuilder, FormGroup } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-lista-aulas',
  templateUrl: './lista-aulas.component.html',
  styleUrls: ['./lista-aulas.component.css']
})
export class ListaAulasComponent implements OnInit {
  usuario: Usuario;
  aulas: AulaInterface[];
  constructor(private aulaService: AulaService, private fb: FormBuilder) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log('USUARIO: ' + this.usuario.id);
    let busca = 'none';
    this.recuperaAulasDaArea(busca);
  }

  recuperaAulasDaArea(busca: string) {
    if(busca === ''){
      busca = 'none';
    }
    console.log('BUSCA: ' + busca);

    setTimeout(() => {
      this.aulaService.recuperaAulasDaArea(this.usuario.id, this.usuario.area, busca)
    .subscribe( data => {
      this.aulas = data;
      console.log('AULAS DA AREA: ' + this.aulas);
    });
    }, 2000);
}
}
