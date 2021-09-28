import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.page.html',
  styleUrls: ['./list-alumnos.page.scss'],
})
export class ListAlumnosPage implements OnInit {
  Title = "Lista de Alumnos"
 
  listAlumnos= []

  constructor(private uService: UsersService, private navCtrl:NavController) { }

  ngOnInit() {
    this.listAlumnos = this.uService.getUsers()
  }
  ionViewWillEnter() {
    this.listAlumnos = this.uService.getUsers()
  }
  addEstudiante() {
    this.navCtrl.navigateForward(["/estudiante-add"]);}
}
