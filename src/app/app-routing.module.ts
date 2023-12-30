import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)},
  {path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule'},
  {path: 'menu', loadChildren: './menu/menu.module#MenuPageModule'},
  {path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioPageModule' },
  {path: 'registrado', loadChildren: './registrado/registrado.module#RegistradoPageModule' },


{
  path: '',
  loadChildren: () => import('./pages/navscan/navscan.module').then(m => m.NavscanPageModule)
},
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
