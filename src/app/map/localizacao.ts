export class Localizacao {
  latitude = '';
  longitude = '';
  usuario_id = 0;

  constructor(latitude: string, longitude: string, usuario_id: number) {
   this.latitude = latitude;
   this.longitude = longitude;
   this.usuario_id = usuario_id;
  }
}
