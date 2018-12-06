import { Component, OnInit, Input, Output } from '@angular/core';
import { HeaderService } from './header.service';
import { AuthService } from '../../core/auth/auth.service';
import { UserService } from '../../core/auth/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() status: boolean;
  @Input() nome: String;
  @Input() foto: String;
  @Input() block: boolean;

  bloqueado: String;
  constructor(private header: HeaderService, user: UserService, private auth: AuthService, private route: Router) {
    this.nome = header.header.nome;
    this.foto = header.header.foto;
    this.status = header.header.status;

    if (user.getCurrentUser() != null) {
      this.status = true;
    }
  }

  ngOnInit() {
    this.bloqueado = localStorage.getItem('block');
    console.log(this.bloqueado);
    if (this.bloqueado === 'true'){
      this.block = true;
      console.log('BLOCK:' + this.block);
      this.route.navigateByUrl('/timer');
    } else{
      this.block = false;
      console.log('BLOCK:' + this.block);
    }
  }

  logout() {
    this.auth.doLogout();
  }
}
