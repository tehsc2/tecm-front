import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';

const rotasApp: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: MapComponent}
];

export const ModuloRoteador = RouterModule.forRoot(rotasApp);
