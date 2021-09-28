import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/services/users.model';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  usuario : Usuario;
  
  constructor(private actRoute:ActivatedRoute) { 
    this.actRoute.queryParams.subscribe(params => {
      this.usuario = JSON.parse(params.usuario);
    })
  }
  ngOnInit() {
  }

}
