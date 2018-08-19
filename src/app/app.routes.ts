import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { PagamentoComponent } from './pagamento/pagamento.component';

const rotasApp: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: MapComponent},
    {path: 'pagamento', component: PagamentoComponent},
    {path: '**', redirectTo: ''}
];

export const ModuloRoteador = RouterModule.forRoot(rotasApp);
