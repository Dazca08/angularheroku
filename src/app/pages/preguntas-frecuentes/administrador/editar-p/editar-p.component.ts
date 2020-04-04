import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ServicioLService } from '../../servicio-l.service';
import { Router , ActivatedRoute} from '@angular/router';
import { Pregunta } from '../inicio-p/pregunta.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar-p',
  templateUrl: './editar-p.component.html',
  styleUrls: ['./editar-p.component.css']
})
export class EditarPComponent implements OnInit {
  id:string;
  preguntas: Pregunta[];
  pregunta: Pregunta ={
    nombre: '',
    descripcion: '',
   
  }
  constructor(private formBuilder: FormBuilder,
      private servi: ServicioLService,
      private Router: Router,
       private route: ActivatedRoute  ) { }
 
  
  ngOnInit(): void {
  	 this.id = this.route.snapshot.params['id'];
  	  this.servi.getu('/'+this.id).subscribe(resultado =>{
 this.pregunta=resultado;
  
 });
  }
   guardar({value, valid}: {value: Pregunta, valid: boolean}){
      if(this.pregunta.nombre=='' || this.pregunta.descripcion==''){
            Swal.fire(
  'Por favor llene todos los campos!',
  'Pregunta no  Editada!',
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
   
      value.id = this.id;
      
   this.servi.update(value,this.id);  
 
  }
})



      }
  
      //this.route.navigate(['/']);
    
  }

 /* eliminar(){
     this.servi.Eliminar(this.id);
     
     this.Router.navigate(['/inicioaPf']);
   
     //this.route.navigate(['/']);
      //this.clientesServicio.eliminarCliente(this.cliente);
      //this.router.navigate(['/']);
   

}*/
}
