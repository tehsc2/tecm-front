import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  avaliarAula(){
    this.route.navigate(['/avaliacao']);
  }

  cancelarAula(){
    this.route.navigate(['/home']);
  }

}
