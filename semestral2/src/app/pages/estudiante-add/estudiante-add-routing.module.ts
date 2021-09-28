import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudianteAddPage } from './estudiante-add.page';

const routes: Routes = [
  {
    path: '',
    component: EstudianteAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudianteAddPageRoutingModule {}
