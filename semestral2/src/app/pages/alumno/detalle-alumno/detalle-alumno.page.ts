import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/services/users.model';
import { UsersService } from 'src/app/services/users.service';

import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.page.html',
  styleUrls: ['./detalle-alumno.page.scss'],
})
export class DetalleAlumnoPage implements OnInit {
  Title ="Perfil Alumno"
  usuario: Usuario;
  constructor(private actRoute: ActivatedRoute, private uService: UsersService, private router: Router,private alertController: AlertController) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id')
      this.usuario = this.uService.getUserprofile(Number(id));
    });
  }
  async deleteEstudiante() {
    const alerta = await this.alertController.create({
      header: 'Eliminar Estudiante',
      message: '¿Estas segur@ de que quieres eliminar a este Estudiante?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.uService.deleteEstudiante(this.usuario.userId);
            this.router.navigate(['/list-alumnos']);
          }
        }
      ]
    });
    await alerta.present();
  }
}
