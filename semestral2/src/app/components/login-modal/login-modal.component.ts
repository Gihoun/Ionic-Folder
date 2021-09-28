import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { UsersService } from 'src/app/services/users.service';
import { Usuario } from 'src/app/services/users.model';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {
  @Input() name: string;
  @Input() link: string;
  listaAlumnos = [];
  usuario: Usuario;
  constructor(
    private modalCtrl: ModalController,
    private uService: UsersService,
    private navCtrl: NavController,
    public alertCtrl: AlertController
  ) {}

  dimissModal() {
    this.modalCtrl.dismiss();
  }
  ngOnInit() {
    this.listaAlumnos = this.uService.getUsers();
  }
  logIn(username, pass) {
    this.usuario = this.uService.getUser(String(username.value));
    const navigationExtras: NavigationExtras = {
      queryParams: {
        usuario: JSON.stringify(this.usuario)
      }
    };
    if (this.usuario.userRol == 'Estudiante') {
      if (this.usuario.password == String(pass.value)) {
        this.navCtrl.navigateForward(['alumno'],navigationExtras);
        this.modalCtrl.dismiss();
      } else {
        this.failLogin()
      }
    } else if (this.usuario.userRol == this.name) {
      if (this.usuario.password == String(pass.value)) {
        this.navCtrl.navigateForward(['docente'],navigationExtras);
        this.modalCtrl.dismiss();
      } else {
        this.failLogin()
      }
    } else{
      this.failLogin()
    }
  }
  async failLogin() {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: 'Usuario o Contraseña incorrecta.',
      buttons: ['OK']
    });

    await alert.present();

    await alert.onDidDismiss();
  }
}
