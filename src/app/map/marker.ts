import { Aula } from '../aula/aula';
import { Instrutor } from './instrutor';

// just an interface for type safety.
export interface MarkerInterface {
  lat: number;
  lng: number;
  draggable: boolean;
  aula: Aula;
}

export class Marker implements MarkerInterface {
  lat = -23.5519104;
  lng = -46.5997832;
  draggable = false;
  aula = new Aula();
}
