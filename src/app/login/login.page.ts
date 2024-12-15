import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  nombre: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]'); // Obtener todos los usuarios

    // Buscar el usuario que coincida con las credenciales
    const usuarioEncontrado = usuarios.find((usuario: any) => 
      usuario.nombre === this.nombre && usuario.password === this.password
    );

    if (usuarioEncontrado) {
      const usuarioLogueado = { nombre: this.nombre }; // Guarda el nombre del usuario logueado
      localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioLogueado));

      // Redirigir a la página de opciones
      this.router.navigate(['/opciones']);
    } else {
      alert('Nombre o contraseña incorrectos');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
}
