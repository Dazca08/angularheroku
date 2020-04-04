import { Component, OnInit } from '@angular/core';
import { ServicioSubService } from '../servicio-sub.service';
import { FormBuilder } from '@angular/forms';

import { Subscripciones } from '../subscripcion.model';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-editar-subscripciones',
  templateUrl: './editar-subscripciones.component.html',
  styleUrls: ['./editar-subscripciones.component.css']
})
export class EditarSubscripcionesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private servi:  ServicioSubService,
    private route: ActivatedRoute) { }
   
    id:string;
    editsub: Subscripciones[];
    editarsub: Subscripciones ={                  
    id: '',
    subscripcion: '',
    contenidoSubscripcion: '',
    valorSubscripcion: '',
    imagen_Subscripcion: '',
    estado: ''                                 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.servi.getu(this.id).subscribe(resultado =>{
    this.editarsub=resultado;

  });
}
  guardar({value, valid}: {value:Subscripciones, valid: boolean}){
   
    value.id = this.id;
    this.servi.update(value,this.id);  
    this.servi.ObtenerJson();
    //this.route.navigate(['/']);
  
}
  
/*

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




*/






}
