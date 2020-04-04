import { Component, OnInit , ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule,NgForm } from '@angular/forms';
import { Usuarios } from '../usuarios.model';
import { ServicioUService  } from '../../servicio-u.service';
import { Router , ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar-u',
  templateUrl: './agregar-u.component.html',
  styleUrls: ['./agregar-u.component.css']
})
export class AgregarUComponent implements OnInit {
usuarios: Usuarios[];
  usuario: Usuarios ={
    Nombre:'',
    Apellido:'',
     TipoDocumento:'',
   NumeroDocumento: '',
    LugarExpedicion:'',
   CorreoElectronico:'',
       Clave:'',
    Icono_url:'',
   VerificacionCuenta:'',
    EstadoCuenta:'',
   RolId: '',
     
    Imagen_documento: '',

   
  }
  
  @ViewChild("usuarioForm") usuarioForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
      private servi:  ServicioUService  ,
      private Router: Router,
       private route: ActivatedRoute) { }
 
 
  agregar({value, valid}: {value:Usuarios, valid: boolean}){
   console.log(this.usuario.CorreoElectronico);
   if(this.usuario.Nombre=='' || this.usuario.Apellido=='' 
      ||this.usuario.TipoDocumento=='' || this.usuario.NumeroDocumento==''
      ||this.usuario.LugarExpedicion=='' || this.usuario.CorreoElectronico==''
      ||this.usuario.Clave==''
      ){
      console.log(this.usuario.Nombre);
            Swal.fire(
  'Por favor llene todos los campos!',
  'Usuario no  Agregado!',
  'error'
)
    }
    else if(this.usuario.RolId=='0'){
                  Swal.fire(
  'Por favor llene todos los campos!',
  'Usuario no  Agregado!',
  'error'
) 
    }
    else if(this.usuario.Icono_url==''){
                    Swal.fire(
  'Por favor seleccione un icono para el usuario!',
  'Usuario no  Agregado!',
  'error'
)
    }
    else{
 
      console.log(value);
      this.servi.insertar(value);
      this.usuarioForm.reset();
    }

  }

  ngOnInit(): void {

  }

}
