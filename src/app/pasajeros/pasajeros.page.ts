import { Component, OnInit } from '@angular/core';
import { ViajeService, Viaje } from '../viaje.service';

@Component({
  selector: 'app-pasajeros',
  templateUrl: './pasajeros.page.html',
  styleUrls: ['./pasajeros.page.scss'],
})
export class PasajerosPage implements OnInit {
  pasajeros: string[] = [];
  viajeSeleccionado: Viaje | null = null;

  constructor(private viajeService: ViajeService) {}

  ngOnInit() {
    this.viajeSeleccionado = JSON.parse(localStorage.getItem('viajeSeleccionado') || 'null');

    // Verificamos que el viaje seleccionado no sea nulo antes de obtener los pasajeros
    if (this.viajeSeleccionado) {
      this.pasajeros = this.viajeService.obtenerPasajeros(this.viajeSeleccionado.nombre, this.viajeSeleccionado.destino); // Pasamos nombre y destino
    }
  }
}
