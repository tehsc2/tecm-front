import { Component, OnInit, Input } from '@angular/core';
import { AulaInterface } from '../aula/aula';
import { AulaService } from '../aula/aulaService.service';
import { Usuario } from '../cadastro/usuario';
import { FormBuilder, FormGroup } from '../../../node_modules/@angular/forms';
import { MarkerInterface } from '../map/marker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-aulas',
  templateUrl: './lista-aulas.component.html',
  styleUrls: ['./lista-aulas.component.css']
})
export class ListaAulasComponent implements OnInit {
  usuario: Usuario;
  aulas: AulaInterface[];
  aula: AulaInterface;
  saldo: number;

  constructor(private aulaService: AulaService, private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log('USUARIO: ' + this.usuario.id);
    let busca = 'none';
    this.recuperaAulasDaArea(busca);
    localStorage.removeItem('outraAulaSelecionada');
    localStorage.removeItem('idAulaSelecionada');
  }

  ingressarAula(idAula: number) {
    console.log('ID AULA: ' + idAula);

    this.saldo = JSON.parse(localStorage.getItem('saldo'));

    this.aulaService.ingressaSala(idAula, this.usuario.id).subscribe(
      data => {
        this.aula = data;

        if(this.saldo === 0.0 || this.aula.preco > this.saldo){
          alert("Você não possui saldo suficiente");
          this.route.navigate(['/pagamento']);
          this.aulaService.sairSala(this.aula.id);
        }else{
          this.saldo = this.saldo - this.aula.preco;
          localStorage.setItem('saldo', JSON.stringify(this.saldo));
          console.log('SALDO ATUAL: ' +  this.saldo);
          localStorage.removeItem('aulaSelecionada');
          localStorage.setItem('outraAulaSelecionada', JSON.stringify(this.aula));
          localStorage.setItem('block', 'true');
          location.reload();

          setTimeout(() => {
            console.log('Aguardando...');
          }, 500);
          this.route.navigate(['/timer']);
        }
      },
      error => {
        alert('Erro ao ingressar na aula' + error);
      }
    );
  }

  recuperaTodasAulas(){
    this.aulaService.recuperaTodasAulas().subscribe(
      data => {
        this.aulas = data;
        console.log('Recuperou todas as aulas... ');
      },
      error => {
        alert('Erro ao recuperar todas as aulas');
      }
    );
  }

  recuperaAulasDaArea(busca: string) {
    if (busca === '') {
      busca = 'none';
    }
    console.log('BUSCA: ' + busca);

      this.aulaService.recuperaAulasDaArea(this.usuario.id, this.usuario.area, busca)
    .subscribe( data => {
      this.aulas = data;
      console.log('AULAS DA AREA: ' + this.aulas);
    });
}
}
