import { Aula } from '../aula/aula';

// just an interface for type safety.
export interface MarkerInterface {
  lat: number;
  lng: number;
  label: string;
  draggable: boolean;
  aula: Aula;
}

export class Marker implements MarkerInterface {
  lat = -23.5519104;
  lng = -46.5997832;
  label = '';
  draggable = false;
  aula = new Aula('', '', '', 0, []);
}
