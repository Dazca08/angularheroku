import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Usuarios } from '../usuarios.model';
import { ServicioUService  } from '../../servicio-u.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-u',
  templateUrl: './inicio-u.component.html',
  styleUrls: ['./inicio-u.component.css']
})
export class InicioUComponent implements OnInit {
 
usuarios: Usuarios[];
  usuario: Usuarios ={
    Id:'',
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
  constructor(private servi:ServicioUService ,private route: ActivatedRoute,private Router: Router,) {this.ObtenerUsuarios }
 filterPost ='';
 PageActual:number=1;
 ObtenerUsuarios(){
 this.servi.ObtenerJson().subscribe(resultado =>{

   this.usuarios=resultado;
 // console.log(this.usuarios);
   
   
   console.log("Informacion ya tiene resultado");
  console.log(this.usuarios.length)
 },
 error=>{
console.log(JSON.stringify(error));

 }); 
   }
    i:number;
    

  ngOnInit(): void {
   
  	this.ObtenerUsuarios();
  
  }
  eliminar(id){

    Swal.fire({
  title: 'Esta seguro?',
  text: "Al eliminar un usuario no se podra recuperar!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, Borrar!'
}).then((result) => {
  if (result.value) {
    Swal.fire(

      'Borrado!',
      'El usuario ha sido eliminado.',
      'success'
     
    )
      this.refrescar(id);
       this.refrescar(id);
  }
})

 /*console.log(id);
     this.servi.Eliminar(id);
 this.usuarios=this.usuarios.filter(x=>x.Id==id);
 this.ObtenerUsuarios();

this.Router.navigateByUrl('/iniciou');*/
   
  
}

refrescar(id){
   console.log(id);
     this.servi.Eliminar(id);
 //this.usuarios=this.usuarios.filter(x=>x.Id==id);
 this.ObtenerUsuarios();
  this.ngOnInit();


}

}
