import { MapModule } from './map.module';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Aula } from '../aula/aula';

@Injectable({
  providedIn: MapModule
})
export class MapService {

  private url = 'http://localhost:8081/aulas';

  constructor(private conexaoApi: HttpClient) {}

  listarAulas(userId: number): Observable<Aula[]> {
      return this.conexaoApi.get<Aula[]>(this.url.concat('/userId'));
  }
}
