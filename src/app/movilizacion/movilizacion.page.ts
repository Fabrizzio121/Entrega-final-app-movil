import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViajeService, Viaje } from '../viaje.service';

@Component({
  selector: 'app-movilizacion',
  templateUrl: './movilizacion.page.html',
  styleUrls: ['./movilizacion.page.scss'],
})
export class MovilizacionPage implements OnInit {
  viajes: Viaje[] = [];
  nombre: string = '';
  carrera: string = '';
  destino: string = '';
  precio: number | null = null;
  comuna: string = '';
  usuarioLogueado: string = '';

  // Lista de comunas
  comunas: string[] = ['laflorida', 'puentealto', 'nuñoa', 'providencia', 'macul', 'sanjoaquin'];

  constructor(private viajeService: ViajeService, private router: Router) {}

  ngOnInit() {
    this.usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado') || '{}').nombre || 'Usuario';
    this.viajes = this.viajeService.obtenerViajes(this.usuarioLogueado);
  }

  agregarViaje() {
    if (this.nombre && this.carrera && this.destino && this.precio !== null && this.comuna) {
      const nuevoViaje: Viaje = {
        nombre: this.nombre,
        carrera: this.carrera,
        destino: this.destino,
        precio: this.precio,
        comuna: this.comuna,
        unidos: [],
        usuario: this.usuarioLogueado,
      };

      const error = this.viajeService.agregarViaje(nuevoViaje);
      if (error) {
        alert(error); 
      } else {
        alert('Viaje creado exitosamente.');
        this.viajes = this.viajeService.obtenerViajes(this.usuarioLogueado); 
        this.limpiarCampos();
      }
    }
  }

  limpiarCampos() {
    this.nombre = '';
    this.carrera = '';
    this.destino = '';
    this.precio = null;
    this.comuna = '';
  }

  verPasajeros(viaje: Viaje) {
    localStorage.setItem('viajeSeleccionado', JSON.stringify(viaje));
    this.router.navigate(['/pasajeros']);
  }
}
