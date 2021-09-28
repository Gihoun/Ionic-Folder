import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAlumnosPageRoutingModule } from './list-alumnos-routing.module';

import { ListAlumnosPage } from './list-alumnos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListAlumnosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListAlumnosPage]
})
export class ListAlumnosPageModule {}
