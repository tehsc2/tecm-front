import { Component } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  registerForm: FormGroup;

  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder, private appComponent: AppComponent) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }

  tryFacebookLogin() {
    this.authService.doFacebookLogin()
    .then(res => {
      this.appComponent.setLogged(true);
      this.router.navigate(['/home']);
    }, err => console.log(err));
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
    .then(res => {
      this.appComponent.setLogged(true);
      this.router.navigate(['/home']);
    }, err => console.log(err));
  }

  tryRegister(value) {
    this.authService.doRegister(value)
    .then(res => {
      this.appComponent.setLogged(true);
      this.router.navigate(['/home']);
    }, err => {
      console.log(err);
    });
  }

}
