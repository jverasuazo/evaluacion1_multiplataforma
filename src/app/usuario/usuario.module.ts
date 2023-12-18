import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { UsuarioPageRoutingModule } from './usuario-routing.module';

import { UsuarioPage } from './usuario.page';

const routes: Routes = [
  {
    path:'',
    component: UsuarioPage
  }
]


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  exports:[UsuarioPage],
  declarations: [UsuarioPage]
})
export class UsuarioPageModule {}
