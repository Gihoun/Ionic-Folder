import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudianteAddPageRoutingModule } from './estudiante-add-routing.module';

import { EstudianteAddPage } from './estudiante-add.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudianteAddPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EstudianteAddPage]
})
export class EstudianteAddPageModule {}
