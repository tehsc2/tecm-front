import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
    SuporteComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    MapModule,
    ModuloRoteador,
    MatToolbarModule,
    CommonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
