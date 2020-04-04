import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Usuarios } from '../usuarios.model';
import { ServicioUService  } from '../../servicio-u.service';
import { Router , ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar-u',
  templateUrl: './editar-u.component.html',
  styleUrls: ['./editar-u.component.css']
})
export class EditarUComponent implements OnInit {
   id:string;
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

  ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
      this.servi.getu('/'+this.id).subscribe(resultado =>{
 this.usuario=resultado;
  
 });
  }

  guardar({value, valid}: {value:Usuarios, valid: boolean}){
   
    if(this.usuario.Nombre=='' || this.usuario.Apellido=='' 
      ||this.usuario.TipoDocumento=='' || this.usuario.NumeroDocumento==''
      ||this.usuario.LugarExpedicion=='' || this.usuario.CorreoElectronico==''
      ||this.usuario.Clave==''){
      console.log(this.usuario.Nombre);
            Swal.fire(
  'Por favor llene todos los campos!',
  'Usuario no  Editado!',
  'error'
)
    }
    else if(this.usuario.Icono_url==''){
                    Swal.fire(
  'Por favor seleccione un icono para el usuario!',
  'Usuario no  Editado!',
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
    else{
 
        Swal.fire({
  title: 'Esta seguro?',
  text: "Desea guardar los cambios?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, guardar!'
}).then((result) => {
  if (result.value) {
    Swal.fire(

      'Guardado!',
      'El usuario ha sido Actualizado ',
      'success'
     
    )
       value.Id = this.id;
      
   this.servi.update(value,this.id);
  }
})
       
     
    }
   
     
  
    
  }



}
