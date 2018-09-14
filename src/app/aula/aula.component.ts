import { Component, OnInit } from '@angular/core';
import { Aula, AulaInterface } from './aula';
import { Instrutor } from '../map/instrutor';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {

  aulas: AulaInterface[];
  constructor() {
    this.aulas = [
      {
        titulo: 'Teste 1',
        curso: 'Direito',
        duracao: '20 min',
        preco: 50.0,
        instrutor: new Instrutor(
          'Henrique Ferreira',
            'Direito',
            '17/12/2017',
            '2.0'
        )
      },
      {
        titulo: 'Teste 2',
        curso: 'Direito',
        duracao: '20 min',
        preco: 50.0,
        instrutor: new Instrutor(
          'Henrique Ferreira',
            'Direito',
            '17/12/2017',
            '2.0'
        )
      },
      {
        titulo: 'Teste 3',
        curso: 'Direito',
        duracao: '20 min',
        preco: 50.0,
        instrutor: new Instrutor(
          'Henrique Ferreira',
            'Direito',
            '17/12/2017',
            '2.0'
        )
      },
      {
        titulo: 'Teste 4',
        curso: 'Direito',
        duracao: '20 min',
        preco: 50.0,
        instrutor: new Instrutor(
          'Henrique Ferreira',
            'Direito',
            '17/12/2017',
            '2.0'
        )
      }
    ];
   }

  ngOnInit() {
  }

}
