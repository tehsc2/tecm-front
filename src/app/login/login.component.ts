import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../core/auth/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { UserService } from '../core/auth/user.service';
import { AutenticacaoService } from '../cadastro/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  block: string;

  constructor(public authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private appComponent: AppComponent, private user: UserService) {
      console.log(this.user.getCurrentUser());
      this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }

  tryFacebookLogin() {
    this.authService.doFacebookLogin()
    .then(res => {
      setTimeout(() => {
        this.appComponent.setLogged(true);
        this.block = localStorage.getItem('block');
        if(this.block === 'true'){
          this.router.navigate(['/timer']);
        } else{
          this.router.navigate(['/home']);
        }
      }, 1000);
    });
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
    .then(res => {
      setTimeout(() => {
        this.appComponent.setLogged(true);
        this.block = localStorage.getItem('block');
        if(this.block === 'true'){
          this.router.navigate(['/timer']);
        } else{
          this.router.navigate(['/home']);
        }
      }, 1000);
    });
  }

  tryLogin(value) {
    this.authService.doLogin(value)
    .then(res => {
      setTimeout(() => {
        this.appComponent.setLogged(true);
        this.block = localStorage.getItem('block');
        if(this.block === 'true'){
          this.router.navigate(['/timer']);
        } else{
          this.router.navigate(['/home']);
        }
      }, 1000);
    }, err => {
      console.log(err);
    });
  }
}
