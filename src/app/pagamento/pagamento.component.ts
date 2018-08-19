import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pagar() {
    const link =
      'https://www.mercadopago.com/mlb/checkout/start?pref_id=166987208-c9781467-4354-4552-9e4f-ccf5b066a156';
    location.href = link;
  }

}
