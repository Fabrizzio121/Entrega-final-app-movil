import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  nombre: string = '';
  newPassword: string = '';

  constructor(private router: Router) {}

  changePassword() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    // Buscar el usuario por nombre
    const usuario = usuarios.find((usuario: any) => usuario.nombre === this.nombre);

    if (usuario) {
      // Cambiar la contraseña
      usuario.password = this.newPassword;
      localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Guardar los cambios en localStorage
      alert('Contraseña cambiada exitosamente');
      this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
    } else {
      alert('Usuario no encontrado');
    }
  }
}
