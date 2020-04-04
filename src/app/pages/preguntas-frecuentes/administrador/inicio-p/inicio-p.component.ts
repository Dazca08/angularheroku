import { Component, OnInit } from '@angular/core';
import { Pregunta } from './pregunta.model';
import { ServicioLService } from '../../servicio-l.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-p',
  templateUrl: './inicio-p.component.html',
  styleUrls: ['./inicio-p.component.css']
})
export class InicioPComponent implements OnInit {

  
preguntas: Pregunta[];
  pregunta: Pregunta ={
    nombre: '',
    descripcion: '',
   
  }
    constructor(private servi:ServicioLService) {  this.ObtenerPreguntas}
PageActual:number=1;
filterPregunta='';
  ObtenerPreguntas(){
 this.servi.ObtenerJson().subscribe(resultado =>{
   this.preguntas=resultado;
   
   console.log("Informacion ya tiene resultado");
  
 },
 error=>{
console.log(JSON.stringify(error));

 }); 
   }
  ngOnInit(): void {
  	this.ObtenerPreguntas();
  }
   eliminar(id){
    Swal.fire({
  title: 'Esta seguro?',
  text: "Al eliminar una pregunta no se podra recuperar!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, Borrar!'
}).then((result) => {
  if (result.value) {
    Swal.fire(

      'Borrado!',
      'La pregunta ha sido eliminado.',
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
 this.ObtenerPreguntas();
  this.ngOnInit();


}

}
