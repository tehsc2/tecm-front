import { Component, OnInit } from '@angular/core';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    // pagar('https://www.mercadopago.com/mlb/checkout/start?pref_id=166987208-c9781467-4354-4552-9e4f-ccf5b066a156')
  }

  pagar(link: string) {
    location.href = link;
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}
