import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovilizacionPage } from './movilizacion.page';

const routes: Routes = [
  {
    path: '',
    component: MovilizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovilizacionPageRoutingModule {}
