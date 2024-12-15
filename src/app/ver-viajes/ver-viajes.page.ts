import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViajeService, Viaje } from '../viaje.service';

@Component({
  selector: 'app-ver-viajes',
  templateUrl: './ver-viajes.page.html',
  styleUrls: ['./ver-viajes.page.scss'],
})
export class VerViajesPage implements OnInit {
  viajes: Viaje[] = [];
  viajeSeleccionado: Viaje | null = null;
  mensajeUnido: string | null = null;


  isModalOpen = false;
  comunaSeleccionada: string = '';


  usuarioLogueado: string = JSON.parse(localStorage.getItem('usuarioLogueado') || '{}').nombre || 'Usuario';

  constructor(
    private viajeService: ViajeService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.viajes = this.viajeService.obtenerViajes(); 
  }

  seleccionarViaje(viaje: Viaje) {
    this.viajeSeleccionado = viaje; 
  }

  unirseAlViaje() {
    if (this.viajeSeleccionado) {
      const error = this.viajeService.unirseViaje(this.viajeSeleccionado, this.usuarioLogueado);
      if (error) {
        this.mensajeUnido = error; 
      } else {
        this.mensajeUnido = `Te has unido al viaje de ${this.viajeSeleccionado.nombre}. El precio del viaje es $${this.viajeSeleccionado.precio}.`;
        this.viajes = this.viajeService.obtenerViajes(); 
      }
    }
  }

  guardarViajes() {
    localStorage.setItem('viajes', JSON.stringify(this.viajes)); 
  }

  abrirImagenModal(comuna: string) {
    this.comunaSeleccionada = comuna; 
    this.isModalOpen = true; 
  }

  cerrarModal() {
    this.isModalOpen = false; 
  }
}
