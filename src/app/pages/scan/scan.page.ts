import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner,
    private dataLocal: DataLocalService) { }

  ngOnInit() {
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData =>{
      console.log('Barcode data', barcodeData);
      if(!barcodeData.cancelled){
        this.dataLocal.guardarRegistro(barcodeData.format,barcodeData.text);
      }
    }).catch(err =>{
      console.log('Error', err);
      this.dataLocal.guardarRegistro('QRCode','geo:4073151796986687,-74.0687294062502');
    })
  }

}
