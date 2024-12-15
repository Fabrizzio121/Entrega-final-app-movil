import { Injectable } from '@angular/core';

export interface Viaje {
  nombre: string;
  carrera: string;
  destino: string;
  precio: number;
  unidos: string[];
  usuario: string; 
  comuna?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ViajeService {
  private viajesKey: string = 'viajes'; 

  constructor() {}

  
  agregarViaje(viaje: Viaje): string | null {
    
    if (this.usuarioUnidoAViaje(viaje.usuario)) {
      return 'No puedes crear un viaje porque ya estás unido a uno.';
    }

    
    if (this.usuarioCreoViaje(viaje.usuario)) {
      return 'No puedes crear un viaje porque ya has creado uno.';
    }

    const viajes = this.cargarViajes();
    viaje.unidos = []; // Inicializar lista de pasajeros
    viajes.push(viaje); // Agregar el nuevo viaje
    this.guardarViajes(viajes); // Guardar cambios en localStorage
    return null; 
  }


  unirseViaje(viaje: Viaje, usuario: string): string | null {
    const viajes = this.cargarViajes();

    
    if (viaje.usuario === usuario) {
      return 'No puedes unirte a tu propio viaje.';
    }

    
    if (this.usuarioCreoViaje(usuario)) {
      return 'No puedes unirte a un viaje porque ya has creado uno.';
    }

    
    if (this.usuarioUnidoAViaje(usuario)) {
      return 'No puedes unirte a un viaje porque ya estás unido a otro.';
    }

    const viajeEncontrado = viajes.find(
      (v) => v.nombre === viaje.nombre && v.destino === viaje.destino
    );

    if (viajeEncontrado) {
     
      if (viajeEncontrado.unidos.includes(usuario)) {
        return 'Ya estás unido a este viaje.';
      }

   
      viajeEncontrado.unidos.push(usuario);
      this.guardarViajes(viajes); 
      return null; 
    }

    return 'No se encontró el viaje seleccionado.';
  }

  
  obtenerViajes(usuario?: string): Viaje[] {
    const viajes = this.cargarViajes();
    return usuario ? viajes.filter((v) => v.usuario === usuario) : viajes;
  }

  
  usuarioUnidoAViaje(usuario: string): boolean {
    const viajes = this.cargarViajes();
    return viajes.some((viaje) => viaje.unidos.includes(usuario));
  }

  
  usuarioCreoViaje(usuario: string): boolean {
    const viajes = this.obtenerViajes(usuario);
    return viajes.length > 0;
  }

  
  obtenerPasajeros(nombre: string, destino: string): string[] {
    const viajes = this.cargarViajes();
    const viajeEncontrado = viajes.find(
      (v) => v.nombre === nombre && v.destino === destino
    );
    return viajeEncontrado ? viajeEncontrado.unidos : [];
  }

 
  private cargarViajes(): Viaje[] {
    const viajes = localStorage.getItem(this.viajesKey);
    return viajes ? JSON.parse(viajes) : [];
  }


  private guardarViajes(viajes: Viaje[]): void {
    localStorage.setItem(this.viajesKey, JSON.stringify(viajes));
  }
}
