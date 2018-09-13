import { Component, OnInit, Input, Output } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() status: boolean;
  @Input() nome: String;
  @Input() foto: String;
  constructor(private header: HeaderService) {
    this.nome = header.header.nome;
    this.foto = header.header.foto;
  }

  ngOnInit() {
  }
}
