import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';  // Importar BarcodeScanner
import { PaginaNotFoundComponent } from './pagina-not-found/pagina-not-found.component';  // Importar el componente 404

@NgModule({
  declarations: [
    AppComponent,
    PaginaNotFoundComponent  // Declarar el componente 404
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    BarcodeScanner,  // Proveer BarcodeScanner
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
