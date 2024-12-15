import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado') || '{}').nombre;

    if (usuarioLogueado) {
      // Si el usuario está logueado, permite el acceso
      return true;
    } else {
      // Si no está logueado, redirige a la página de login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
