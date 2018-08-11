import { Marker } from './marker';

export class UsuarioMarkerInterface {
  userId: number;
  markers: Marker[];
}

export class UsuarioMarker implements UsuarioMarkerInterface {
  userId = 0;
  markers = [];

  constructor(userId: number, markers: Marker[]) {
    this.userId = userId;
    this.markers = markers;
  }
}
