import { Component } from '@angular/core';
import { UserService } from './core/auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  status = false;

  constructor(private usuario: UserService) {
    if (usuario.afAuth.auth.currentUser == null) {
      this.status = false;
      console.log('Nenhum usuário encontrado');
    } else {
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


