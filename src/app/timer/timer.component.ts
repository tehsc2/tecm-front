import { Component, OnInit, Input } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { Aula } from '../aula/aula';
import { MarkerInterface, Marker } from '../map/marker';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() aula: Aula;

  @Input() marker: MarkerInterface = new Marker();

  latitude: number;
  longitude: number;

  constructor(private route: Router) { }

  ngOnInit() {
    this.marker = JSON.parse(localStorage.getItem('aulaSelecionada'));
    console.log('MARKER: ' + this.marker);

    if(this.marker === null){
      this.aula = JSON.parse(localStorage.getItem('outraAulaSelecionada'));
      console.log('AULA: ' + this.aula.titulo);
      //falta buscar a localizacao do instrutor
      this.latitude = -23.5506212;
      this.longitude = -46.6062864;
    } else{
      this.aula = this.marker.aula;
    }    
  }

  avaliarAula(){
    localStorage.setItem('idAulaSelecionada', JSON.stringify(this.aula.id));
    this.route.navigate(['/avaliacao']);
  }

  cancelarAula(){
    this.route.navigate(['/home']);
  }

}
