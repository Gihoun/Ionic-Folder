import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAlumnoPageRoutingModule } from './detalle-alumno-routing.module';

import { DetalleAlumnoPage } from './detalle-alumno.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAlumnoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleAlumnoPage]
})
export class DetalleAlumnoPageModule {}
