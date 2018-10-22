import { Component, OnInit } from '@angular/core';
import { Aula, AulaInterface } from './aula';
import { FormBuilder, FormGroup } from '../../../node_modules/@angular/forms';
import { AulaVO } from './aulaVO';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {
  aulaForm: FormGroup;

  criarAula: boolean;

  aula: AulaVO;
  aulas: AulaInterface[];
  constructor(private fb: FormBuilder) {
    this.createForm();
    // chama o endpoint
    this.aulas = [
      {
        id: 0,
        usuario_id: 1,
        titulo: 'Scrum em 30 minutos!',
        descricao: 'TI',
        duracao: '30 m',
        preco: 30.0
      },
      {
      id: 0,
      usuario_id: 1,
      titulo: 'Linux em 60 minutos!',
      descricao: 'TI',
      duracao: '60 m',
      preco: 25.0
    }
    ];
   }

  ngOnInit() {
    this.criarAula = false;
  }

  enviarDados() {
    this.aula = new AulaVO(this.aulaForm.value);
    console.log(this.aula);
  }

  createForm() {
    this.aulaForm = this.fb.group({
      id: [0],
      titulo: [''],
      descricao: [''],
      duracao: [''],
      preco: null,
      status: ['']
    })
  }

  exibirCriarAula(){
    document.getElementById('btn-criar').hidden = true;
    this.criarAula = true;
  }

  exibirAulas(){
    document.getElementById('btn-criar').hidden = false;
    this.criarAula = false;
  }

}
