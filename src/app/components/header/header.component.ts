import { Component, OnInit, Input, Output } from '@angular/core';
import { HeaderService } from './header.service';
import { AuthService } from '../../core/auth/auth.service';
import { UserService } from '../../core/auth/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() status: boolean;
  @Input() nome: String;
  @Input() foto: String;
  constructor(private header: HeaderService, user: UserService, private auth: AuthService) {
    this.nome = header.header.nome;
    this.foto = header.header.foto;
    this.status = header.header.status;

    if (user.getCurrentUser() != null) {
      this.status = true;
    }
  }

  ngOnInit() {
  }

  logout() {
    this.auth.doLogout();
  }
}
