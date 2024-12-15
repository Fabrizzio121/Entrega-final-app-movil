import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovilizacionPageRoutingModule } from './movilizacion-routing.module';

import { MovilizacionPage } from './movilizacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovilizacionPageRoutingModule
  ],
  declarations: [MovilizacionPage]
})
export class MovilizacionPageModule {}
