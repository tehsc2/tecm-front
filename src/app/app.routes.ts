import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EsqueciComponent } from './esqueci/esqueci.component';
import { AulaComponent } from './aula/aula.component';

 const rotasApp: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: MapComponent},
    {path: 'pagamento', component: PagamentoComponent},
    {path: 'ingressar', component: CarrinhoComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'esqueci', component: EsqueciComponent},
    {path: 'aulas', component: AulaComponent},
    {path: '**', redirectTo: ''}
];

export const ModuloRoteador = RouterModule.forRoot(rotasApp);
