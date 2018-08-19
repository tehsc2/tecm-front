import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModalModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  imports: [AgmCoreModule.forRoot({
    // please get your own API key here:
    // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
    apiKey: 'AIzaSyCjZOosnBXkgB7Rljg4gBlU-5084us38pE'
  }),
  BrowserModule,
  NgbModalModule,
  NgbRatingModule]
})
export class MapModule {}
