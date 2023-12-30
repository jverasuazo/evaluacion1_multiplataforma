import { Component, OnInit } from '@angular/core';
import { DatalocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-historial-scan',
  templateUrl: './historial-scan.page.html',
  styleUrls: ['./historial-scan.page.scss'],
})
export class HistorialScanPage implements OnInit {

  constructor(protected service: DatalocalService) { }

  ngOnInit() {
  }

  abrir(registro:any){
    this.service.abrir(registro)
  }

}







