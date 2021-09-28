import { Injectable } from '@angular/core';
import { Usuario } from './users.model';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  private usuarios: Usuario[] = [
    {
      userId: 1,
      userName: 'max.pow',
      name: 'Max Power',
      userMail: 'max.p@duoc.cl',
      userRol: 'Estudiante',
      password: '12345',
    },
    {
      userId: 2,
      userName: 'edo.cab',
      name: 'Eduardo Cabello',
      userMail: 'edo.cab@duoc.cl',
      userRol: 'Estudiante',
      password: 'admin',
    },
    {
      userId: 3,
      userName: 'profe.ba',
      name: 'Bastian Uribe',
      userMail: 'bast.uri@profeduoc.cl',
      userRol: 'Docente',
      password: 'profeduoc',
    },
  ];
  //METODOS CRUD
  getUsers() {
    return [
      ...this.usuarios.filter((rol) => {
        return rol.userRol === 'Estudiante';
      }),
    ];
  }
  getUser(username: string) {
    return {
      ...this.usuarios.find((usuario) => {
        return usuario.userName === username;
      }),
    };
  }
  getUserprofile(id: number) {
    return {
      ...this.usuarios.find((usuario) => {
        return usuario.userId === id;
      }),
    };
  }
  addEstudiantes(id:number,username:string,name:string,mail:string,rol:string,pass:string){
    this.usuarios.push({
      userId: id,
      userName: username,
      name: name,
      userMail: mail, 
      userRol: rol,
      password: pass,
    });
  }
  deleteEstudiante (id:number){
    this.usuarios = this.usuarios.filter( usuario =>{
      return usuario.userId !== id
    });

  }
}
