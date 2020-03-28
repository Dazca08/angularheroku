import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Usuarios } from '../usuarios.model';
import { ServicioUService  } from 'src/app/componentes/Usuarios/servicio-u.service';
import { Router , ActivatedRoute} from '@angular/router';
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
   
   
      value.Id = this.id;
      
   this.servi.update(value,this.id);  
      //this.route.navigate(['/']);
    
  }

  eliminar(){
     this.servi.Eliminar(this.id);
     
     this.Router.navigate(['/iniciou']);
   this.ngOnInit();
     //this.route.navigate(['/']);
      //this.clientesServicio.eliminarCliente(this.cliente);
      //this.router.navigate(['/']);
   

}

}
