import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ModuloRoteador } from './app.routes';
import { MapModule } from './map/map.module';
import { AgmCoreModule } from '@agm/core';
import { AulaComponent } from './aula/aula.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AulaComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    MapModule,
    ModuloRoteador
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
