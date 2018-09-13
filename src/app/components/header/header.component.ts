import { Component, OnInit, Input } from '@angular/core';
import { UsuarioMarker } from '../../map/usuarioMarker';
import { FirebaseUserModel } from '../../core/auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() status: boolean;
  nome = 'Esther';
  constructor() {
  }

  ngOnInit() {
  }
}
