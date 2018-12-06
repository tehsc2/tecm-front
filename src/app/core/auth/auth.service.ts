import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { HeaderService } from '../../components/header/header.service';
import { Usuario } from '../../cadastro/usuario';
import { Router } from '../../../../node_modules/@angular/router';
import { AutenticacaoService } from '../../cadastro/autenticacao.service';
import { AulaService } from 'src/app/aula/aulaService.service';

@Injectable()
export class AuthService implements OnInit {

  usuario: Usuario;

  constructor(public afAuth: AngularFireAuth, public header: HeaderService, private aulaService: AulaService, private route: Router, private autenticacaoService: AutenticacaoService) { }

  ngOnInit() {
    this.usuario = <Usuario> JSON.parse(localStorage.getItem('usuario'));
  }

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
          this.autenticacaoService.recuperarUsuarioPorEmail(res.user.email).subscribe(
            data => {
              this.usuario = data;
              this.aulaService.recuperaSala(this.usuario.id).subscribe(
                data => {
                  localStorage.setItem('block', 'true');
                },
                error => {
                  localStorage.setItem('block', 'false');
                }
              );
              localStorage.setItem('usuario', JSON.stringify(this.usuario));
              console.log('USUARIO: ' + localStorage.getItem('usuario'));
            }
        )
        this.header.createHeader(res.user.displayName, res.user.photoURL, true);
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      });
    });
  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        this.autenticacaoService.recuperarUsuarioPorEmail(res.user.email).subscribe(
          data => {
            this.usuario = data;
            this.aulaService.recuperaSala(this.usuario.id).subscribe(
              data => {
                localStorage.setItem('block', 'true');
              },
              error => {
                localStorage.setItem('block', 'false');
              }
            );
            localStorage.setItem('usuario', JSON.stringify(this.usuario));
            console.log('USUARIO: ' + localStorage.getItem('usuario'));
          }
        )
        this.header.createHeader(res.user.displayName, res.user.photoURL, true);
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      });
    });
  }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        this.header.createHeader(value.email, '', true);
        resolve(res);
      }, err => alert(err));
    });
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        this.autenticacaoService.recuperarUsuarioPorEmail(res.user.email).subscribe(
          data => {
            this.usuario = data;
            this.aulaService.recuperaSala(this.usuario.id).subscribe(
              data => {
                localStorage.setItem('block', 'true');
              },
              error => {
                localStorage.setItem('block', 'false');
              }
            );
            localStorage.setItem('usuario', JSON.stringify(this.usuario));
            console.log('USUARIO: ' + localStorage.getItem('usuario'));
          }
        )
        this.header.createHeader(value.email, '', true);
        resolve(res);
      }, err => alert(err));
    });
  }

  doLogout() {
        localStorage.removeItem('usuario');
        this.afAuth.auth.signOut();
        location.reload();
        this.route.navigate(['/']);
  }


}
