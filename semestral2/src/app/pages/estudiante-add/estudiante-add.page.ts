import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-estudiante-add',
  templateUrl: './estudiante-add.page.html',
  styleUrls: ['./estudiante-add.page.scss'],
})
export class EstudianteAddPage implements OnInit {
  
  Title="Agregar Estudiante"

  constructor(private uService: UsersService, private router: Router) { }

  ngOnInit() {
  }
  addEstudiante(id,username,name,mail,rol,pass){
    this.uService.addEstudiantes(id.value,username.value,name.value,mail.value,rol.value,pass.value);
    this.router.navigate(['/list-alumnos']);
  }
}
