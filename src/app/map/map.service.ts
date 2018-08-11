import { MapModule } from './map.module';
import { Injectable } from '../../../node_modules/@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient } from '../../../node_modules/@angular/common/http';
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
