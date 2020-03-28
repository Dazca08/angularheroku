import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Usuarios } from '../usuarios.model';
import { ServicioUService  } from 'src/app/componentes/Usuarios/servicio-u.service';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-agregar-u',
  templateUrl: './agregar-u.component.html',
  styleUrls: ['./agregar-u.component.css']
})
export class AgregarUComponent implements OnInit {
usuarios: Usuarios[];
  usuario: Usuarios ={
    Nombre: '',
    Apellido: '',
     TipoDocumento: '',
   NumeroDocumento: '',
    LugarExpedicion: '',
   CorreoElectronico: '',
       Clave: '',
    Icono_url: '',
   VerificacionCuenta: '',
    EstadoCuenta: '',
   RolId: '',
     
    Imagen_documento: '',

   
  }
  constructor(private formBuilder: FormBuilder,
      private servi:  ServicioUService  ,
      private Router: Router,
       private route: ActivatedRoute) { }
  agregar({value, valid}: {value:Usuarios, valid: boolean}){
      this.servi.insertar(value);

  }

  ngOnInit(): void {
  }

}
