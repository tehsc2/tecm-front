import { Component } from '@angular/core';
import { UserService } from './core/auth/user.service';
import { Usuario } from './cadastro/usuario';
import { HeaderService } from './components/header/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  status = false;

  constructor(private header: HeaderService) {
    let usuarioResponse = <Usuario> JSON.parse(localStorage.getItem('usuario'));

    if (usuarioResponse == null) {
      this.status = false;
      console.log('Nenhum usuário encontrado');
    } else {
      this.header.createHeader(usuarioResponse.nome, '', true);
      this.status = true;
    }
  }

  setLogged(status: boolean) {
    this.status = status;
  }

  isLoggedIn(): boolean {
    return this.status;
  }
}


