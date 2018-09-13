import { Component } from '@angular/core';
import { UsuarioMarker } from './map/usuarioMarker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  status = true;

  constructor() {
    this.setLogged(this.status);
  }

  setLogged(status: boolean) {
    this.status = status;
    console.log('Status header: ' + this.status);
  }

  isLoggedIn(): boolean {
    console.log('Status header now: ' + this.status);
    return this.status;
  }
}


