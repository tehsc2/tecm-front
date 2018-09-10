import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ModuloRoteador } from './app.routes';
import { MapModule } from './map/map.module';
import { AulaComponent } from './aula/aula.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '../../node_modules/@angular/common';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import {MatCardModule} from '@angular/material/card';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { SuporteComponent } from './suporte/suporte.component';
import { EsqueciComponent } from './esqueci/esqueci.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from './core/auth/auth.service';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './core/auth/user.service';
import { AuthGuard } from './core/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AulaComponent,
    HeaderComponent,
    PagamentoComponent,
    CarrinhoComponent,
    CadastroComponent,
    ConfiguracoesComponent,
    SuporteComponent,
    EsqueciComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MapModule,
    ModuloRoteador,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    CommonModule,
    MatCardModule,
  ],
  providers: [
    AngularFirestore,
    AngularFireAuth,
    AuthService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
