import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Usuario } from 'src/app/services/users.model';

@Component({
  selector: 'app-detalle-docente',
  templateUrl: './detalle-docente.page.html',
  styleUrls: ['./detalle-docente.page.scss'],
})
export class DetalleDocentePage implements OnInit {
  Title ="Perfil Docente"
  usuario: Usuario;
  constructor(private actRoute: ActivatedRoute, private uService: UsersService) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id')
      this.usuario = this.uService.getUserprofile(Number(id));
    });
  }
}
