import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage {
  nombreUsuario: string = ''; 

  constructor(private router: Router) {
    this.cargarNombreUsuario();
  }

  cargarNombreUsuario() {
    // Recupera el usuario logueado de localStorage
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado') || '{}');
    this.nombreUsuario = usuarioLogueado.nombre || 'Usuario'; 
  }

  goToMovilizacion() {
    this.router.navigate(['/movilizacion']); // Navega a la página de movilización
  }

  goToVerViajes() {
    this.router.navigate(['/ver-viajes']); // Navega a la página de ver viajes
  }

  logout() {
    // Elimina el usuario logueado del localStorage
    localStorage.removeItem('usuarioLogueado');
    this.router.navigate(['/bienvenida']);
  }
}
