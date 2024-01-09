import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.models';
import { EnvioComponent } from '../envio/envio.component';


@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  public url: string;

  constructor(
    public _http:HttpClient
  ) { 
    this.url= "https://"
  }

  getDespacho(): Observable<any>{
    return this._http.get(this.url+'api-productos/despachos/getenvio')
  }
  getProducto(): Observable<any>{
    return this._http.get(this.url+'api-productos/productos/getproducto')
  }
  
  addProducto(producto: Producto): Observable<Producto> {
    return this._http.post<Producto>(this.url + 'api-productos/productos/addproducto', producto);
  }
  /*addEnvio(envio: Envio): Observable<Envio>{
    return this._http.post<Envio>(this.url+'api-productos/productos/addenvio', envio);
  }*/

}
