import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Usuarios } from '../usuarios.model';
import { ServicioUService  } from 'src/app/componentes/Usuarios/servicio-u.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-inicio-u',
  templateUrl: './inicio-u.component.html',
  styleUrls: ['./inicio-u.component.css']
})
export class InicioUComponent implements OnInit {
 
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
  constructor(private servi:ServicioUService ,private route: ActivatedRoute,private Router: Router,) {this.ObtenerUsuarios }
 ObtenerUsuarios(){
 this.servi.ObtenerJson().subscribe(resultado =>{
   this.usuarios=resultado;
   
   console.log("Informacion ya tiene resultado");
  
 },
 error=>{
console.log(JSON.stringify(error));

 }); 
   }
    

  ngOnInit(): void {
  	this.ObtenerUsuarios();
   
  }
  eliminar(id){
     this.servi.Eliminar(id);
     
     this.Router.navigate(['/iniciou']);
   
   

}

}
