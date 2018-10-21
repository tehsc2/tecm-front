import { Component } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Usuario } from './usuario';
import { AutenticacaoService } from './autenticacao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  registerForm: FormGroup;

  usuarioForm: FormGroup;

  usuario: Usuario;

  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder, private appComponent: AppComponent, private service: AutenticacaoService) {
    this.createForm();
  }

  get f() { return this.registerForm.controls; }

  enviarDados() {
    console.log(this.usuarioForm.value);
    this.usuario = new Usuario(this.usuarioForm.value);

    this.registerForm = this.fb.group({
      email: [this.usuario.email],
      password: [this.usuario.senha]
    })
    
    console.log('Firebase Register:' + this.registerForm.value);

    this.tryRegister(this.registerForm.value);
  }

  createForm() {
    this.usuarioForm = this.fb.group({
      id: [0],
      nome: ['', Validators.compose([Validators.required])],
      senha: ['', Validators.compose([Validators.minLength(6)])],
      email: ['', Validators.compose([Validators.required])],
      sexo: [''],
      curso: [''],
      universidade: [''],
      conta: ['EMAIL'],
      empresa: [''],
      profissao: [''],
      idade: [0],
      area: ['']
    })
  }

  tryFacebookLogin() {
    this.authService.doFacebookLogin()
    .then(res => {
      this.appComponent.setLogged(true);
      this.router.navigate(['/home']);
    }, err => alert(err));
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
    .then(res => {
      this.appComponent.setLogged(true);
      this.router.navigate(['/home']);
    }, err => alert(err));
  }

  tryRegister(value) {
    console.log(value);
      this.authService.doRegister(value)
      .then(res => {
        this.appComponent.setLogged(true);
        this.service.salvarUsuario(this.usuario);
        }, err => {
          alert(err);
        });
      }
}
