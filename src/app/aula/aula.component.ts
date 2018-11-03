import { Component, OnInit } from '@angular/core';
import { Aula, AulaInterface } from './aula';
import { FormBuilder, FormGroup } from '../../../node_modules/@angular/forms';
import { AulaVO } from './aulaVO';
import { AulaService } from './aulaService.service';
import { Usuario } from '../cadastro/usuario';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {
  aulaForm: FormGroup;
  usuario: Usuario;
  criarAula: boolean;

  aula: AulaVO;
  aulas: AulaInterface[];
  constructor(private fb: FormBuilder, private aulaService: AulaService) {
  }

  salvarAula() {
    this.enviarDados();
    console.log(this.aula);
    this.aulaService.salvarAula(this.aula);
    this.exibirAulas();
    this.recuperaAulas();
  }

  recuperaAulas() {
    this.aulaService.recuperaAulas(this.usuario.id)
      .subscribe( data => {
        this.aulas = data;
      });
  }
  
  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log('USUARIO: ' + this.usuario.id);
    this.criarAula = false;

    this.recuperaAulas();
    this.createForm();
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
      preco: 0,
      status: [''],
      usuario_id: this.usuario.id
    })
  }

  editarAula(id: number) {
    this.aulaService.recuperarAulaById(id).subscribe(
      data => {
        this.aula = data;
        console.log(this.aula)

        this.updateAulaForm(this.aula);
      });
  }

  updateAulaForm(aula: AulaVO) {
    this.aulaForm = this.fb.group({
      id: [aula.id],
      titulo: [aula.titulo],
      descricao: [aula.descricao],
      duracao: [aula.duracao],
      preco: [aula.preco],
      status: [aula.status],
      usuario_id: [aula.usuario_id]
    })
  }

  exibirCriarAula(id: number){
    document.getElementById('btn-criar').hidden = true;
    this.criarAula = true;
    console.log('ID:' + id);
    this.editarAula(id);
  }

  exibirAulas(){
    document.getElementById('btn-criar').hidden = false;
    this.criarAula = false;
  }

}
