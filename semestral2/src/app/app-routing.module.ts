import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'recuperar',
    loadChildren: () =>
      import('./pages/recuperar/recuperar.module').then(
        (m) => m.RecuperarPageModule
      ),
  },
  {
    path: 'alumno',
    loadChildren: () =>
      import('./pages/alumno/alumno.module').then((m) => m.AlumnoPageModule),
  },
  {
    path: 'docente',
    loadChildren: () =>
      import('./pages/docente/docente.module').then((m) => m.DocentePageModule),
  },
  {
    path: 'list-alumnos',
    loadChildren: () =>
      import('./pages/list-alumnos/list-alumnos.module').then(
        (m) => m.ListAlumnosPageModule
      ),
  },
  {
    path: 'estudiante-add',
    loadChildren: () => import('./pages/estudiante-add/estudiante-add.module').then( m => m.EstudianteAddPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
