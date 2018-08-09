import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const rotasApp: Routes = [
    {path: '', component: LoginComponent}
];

export const ModuloRoteador = RouterModule.forRoot(rotasApp);
