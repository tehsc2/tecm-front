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
    this.aulas = [];
   }

  ngOnInit() {
  }

}
