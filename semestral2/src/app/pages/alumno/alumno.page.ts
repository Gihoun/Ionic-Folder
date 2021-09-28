import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/services/users.model';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  usuario : Usuario;
  
  constructor(private actRoute:ActivatedRoute) { 
    this.actRoute.queryParams.subscribe(params => {
      this.usuario = JSON.parse(params.usuario);
    })
  }

  ngOnInit() {
  }

}
