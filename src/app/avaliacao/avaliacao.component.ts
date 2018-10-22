import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  avaliarAula(){
    this.route.navigate(['/home']);
  }

}
