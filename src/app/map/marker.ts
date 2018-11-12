import { Aula } from '../aula/aula';
import { Instrutor } from './instrutor';

// just an interface for type safety.
export interface MarkerInterface {
  latitude: number;
  longitude: number;
  draggable: boolean;
  aula: Aula;
}

export class Marker implements MarkerInterface {
  latitude = -23.5519104;
  longitude = -46.5997832;
  draggable = false;
  aula = new Aula(0, '', '', '', 0, '');

  constructor(){
    this.latitude = 0;
    this.longitude = 0;
  }
}
