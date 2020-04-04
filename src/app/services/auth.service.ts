import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario.interface';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuario: Usuario;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(correo: string, clave: string) {
    const body = {
      correoElectronico: correo,
      clave
    };
    Swal.fire({
      title: 'Espere por favor',
      text: 'Cargando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();
    this.http.post(`${ apiUrl }/cuenta/iniciaSesion`, body)
                    .pipe(
                      catchError(err => of(err))
                    )
                    .subscribe(res => {
                      if (res['ok'] === true) {
                        if (res['userLogin'].RolId === 1) {
                          localStorage.setItem('usuario', JSON.stringify(res['userLogin']));
                          this.router.navigateByUrl('/');
                          Swal.close();
                        } else {
                          this.mostrarAlert('Error', 'No eres un usuario administrador', 'warning');
                        }
                      } else {
                        this.mostrarAlert('Error', 'Correo y/o contraseña incorrectas', 'warning');
                      }
                    });
  }

  getUsuario() {
    setTimeout(() => {
      this.usuario = JSON.parse(localStorage.getItem('usuario')) || undefined;
    }, 2000);
    return this.usuario;
  }

  isAuthenticate() {
    setTimeout(() => {
      return this.getUsuario() !== undefined; // si es diferente de undefined es porque esta autenticado
    });
  }

  logout() {
    localStorage.removeItem('usuario');
    this.router.navigateByUrl('/');
  }

  mostrarAlert(title: any, text: any, icon: any) {
    Swal.fire({
      title,
      text,
      icon
    });
  }
}
