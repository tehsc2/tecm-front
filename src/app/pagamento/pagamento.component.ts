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
  constructor(private modalService: NgbModal, private route: Router) { }

  ngOnInit() {
    // pagar('https://www.mercadopago.com/mlb/checkout/start?pref_id=166987208-c9781467-4354-4552-9e4f-ccf5b066a156')
    document.getElementById('pagamento-view').hidden = true;
  }

  pagar(link: string) {
    location.href = link;
  }

  showPagamento(){
    document.getElementById('pagamento-view').hidden = false;
    document.getElementById('div-pagamento').hidden = true;
  }

  voltar(){
    document.getElementById('pagamento-view').hidden = true;
    document.getElementById('div-pagamento').hidden = false;
  }
}
