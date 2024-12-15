import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PaginaNotFoundComponent } from './pagina-not-found/pagina-not-found.component'; // Importa el componente 404

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenida',  // Página inicial
    pathMatch: 'full'
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./bienvenida/bienvenida.module').then(m => m.BienvenidaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'opciones',
    loadChildren: () => import('./opciones/opciones.module').then(m => m.OpcionesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'movilizacion',
    loadChildren: () => import('./movilizacion/movilizacion.module').then(m => m.MovilizacionPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ver-viajes',
    loadChildren: () => import('./ver-viajes/ver-viajes.module').then(m => m.VerViajesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pasajeros',
    loadChildren: () => import('./pasajeros/pasajeros.module').then(m => m.PasajerosPageModule)
  },
  {
    path: '**',  // Ruta para manejar el error 404
    component: PaginaNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
