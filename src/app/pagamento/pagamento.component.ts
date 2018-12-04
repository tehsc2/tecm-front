import { Component, OnInit } from '@angular/core';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { Router } from '../../../node_modules/@angular/router';
import { FormBuilder, FormGroup } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  url: string;
  saldo = 0.00;
  resgateForm: FormGroup;
  constructor(private modalService: NgbModal, private route: Router, private fb: FormBuilder) { }

  ngOnInit() {
    // pagar('https://www.mercadopago.com/mlb/checkout/start?pref_id=166987208-c9781467-4354-4552-9e4f-ccf5b066a156')
    this.saldo = JSON.parse(localStorage.getItem('saldo'));

    if(this.saldo === null){
      this.saldo = 0.00;
    }
    console.log(this.saldo);
    this.createForm();
  }

  enviarDados() {
    this.saldo = JSON.parse(localStorage.getItem('saldo'));
    console.log(this.resgateForm.value);
  }

  createForm() {
    this.resgateForm = this.fb.group({
      agencia: [''],
      conta: [''],
      cpf: [''],
      saldo: this.saldo - 3.0
    })
  }

  pagar20(){
    this.saldo = this.saldo + 20.00;
    localStorage.setItem('saldo', JSON.stringify(this.saldo));
    this.createForm();
  }

  pagar100(){
    this.saldo = this.saldo + 100.00;
    localStorage.setItem('saldo', JSON.stringify(this.saldo));
    this.createForm();
  }

  pagar50(link: string) {
    window.open(
      link,
      '_blank' // <- This is what makes it open in a new window.
    );

    this.saldo = this.saldo + 50.00;
    localStorage.setItem('saldo', JSON.stringify(this.saldo));
    this.createForm();
  }

  showPagamento(){
    document.getElementById('div-pagamento').hidden = true;
  }

  voltar(){
    document.getElementById('div-pagamento').hidden = false;
  }

  resgatar(content, saldo: number){
    if(saldo === 0.0 || saldo === 3.0){
      alert("Você não possui saldo suficiente para resgatar");
    }else{
      this.modalService.open(content, { centered: true }); 
      document.getElementById('messageOk').hidden = true;
      document.getElementById('messageResgate').hidden = false;   
    }
  }

  resgatarSaldo(){
    this.saldo = this.saldo - this.resgateForm.get('saldo').value - 3.0;
    localStorage.setItem('saldo', JSON.stringify(this.saldo));
    document.getElementById('messageOk').hidden = false;
    document.getElementById('messageResgate').hidden = true;
  }
}
