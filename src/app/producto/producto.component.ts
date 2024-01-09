import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { Producto } from '../models/producto.models';
import { AlertController } from '@ionic/angular';

import { JsonPipe } from '@angular/common';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent  implements OnInit {

  model: Producto = {STOCK: 0, CODIGO_PRODUCTO:0, ID_PRODUCTO: this.generate(), NOMBRE_PRODUCTO: '', CAPACIDAD: ''}
  public producto: any;

  constructor(private _peticionesService: PeticionesService, public alert: AlertController) { }

  ngOnInit() {
    this._peticionesService.getProducto().subscribe(
      result => {
        console.log(result);
        this.producto = result;
        return result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

agregarProducto(){
  console.log(this.model);

  this._peticionesService.addProducto(JSON.stringify(this.model)).subscribe(
    (response: Producto) => {
      console.log(response)
      if(this.model.NOMBRE_PRODUCTO == ""){
        this.showAlert("error", "no pueden quedar campos vacios")
      }else{
        this.showAlert("Producto Agregado", this.model.NOMBRE_PRODUCTO)
      }
    }
  );
}

showAlert(title: string, message: string) {
  this.alert.create({
    header: title,
    message: message,
    buttons: ['OK']
  }).then(alert => alert.present());
}

generate(): number {
  return Math.floor(Math.random() * 1000);
}

}





