import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '../../../node_modules/@agm/core';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';

@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  imports: [AgmCoreModule.forRoot({
    // please get your own API key here:
    // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
    apiKey: 'AIzaSyCjZOosnBXkgB7Rljg4gBlU-5084us38pE'
  }),
  BrowserModule]
})
export class MapModule {}
