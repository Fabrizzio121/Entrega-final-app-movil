import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  nombre: string = '';
  password: string = '';

  constructor(private router: Router) {}

  crearCuenta() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    // Verificar si el nombre ya está registrado
    const usuarioExistente = usuarios.find((usuario: any) => usuario.nombre === this.nombre);

    if (usuarioExistente) {
      alert('El nombre de usuario ya existe. Intenta con otro.');
      return;
    }

    // Agregar el nuevo usuario al arreglo
    usuarios.push({ nombre: this.nombre, password: this.password });
    localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Guardar en localStorage

    alert('Cuenta creada exitosamente');
    this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
  }
}
