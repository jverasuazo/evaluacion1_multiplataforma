import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string="";
  password: string="";

  constructor(
    public afAuth: AngularFireAuth,
    public route: Router,
    public alert: AlertController    
  ) { }

  ngOnInit() {
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async login(){
    const {username,password} = this
    try{
      const res = await this.afAuth.auth.signInWhithEmailAndPassword(username,password)
      this.route.navigate(['logeado'])
    } catch(err){
      console.dir(err);
      
      if(err.code === "auth/invalid-email"){
        this.showAlert("Error","Algun datos incorrecto");
      }
      if(err.code === "auth/user-not-found"){
        this.showAlert("Error","No se encuentra el usuario");
      }
    }
  }
}
