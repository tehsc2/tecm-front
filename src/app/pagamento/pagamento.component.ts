import { Component, OnInit } from '@angular/core';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  url: string;
  saldo = 0.00;
  constructor(private modalService: NgbModal, private route: Router) { }

  ngOnInit() {
    // pagar('https://www.mercadopago.com/mlb/checkout/start?pref_id=166987208-c9781467-4354-4552-9e4f-ccf5b066a156')
    this.saldo = JSON.parse(localStorage.getItem('saldo'));

    if(this.saldo === null){
      this.saldo = 0.00;
    }
    console.log(this.saldo);
  }

  pagar20(){
    this.saldo = this.saldo + 20.00;
    localStorage.setItem('saldo', JSON.stringify(this.saldo));
  }

  pagar100(){
    this.saldo = this.saldo + 100.00;
    localStorage.setItem('saldo', JSON.stringify(this.saldo));
  }

  pagar50(link: string) {
    window.open(
      link,
      '_blank' // <- This is what makes it open in a new window.
    );

    this.saldo = this.saldo + 50.00;
    localStorage.setItem('saldo', JSON.stringify(this.saldo));
  }

  showPagamento(){
    document.getElementById('div-pagamento').hidden = true;
  }

  voltar(){
    document.getElementById('div-pagamento').hidden = false;
  }
}
