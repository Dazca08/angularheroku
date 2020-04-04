import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Evento } from './evento.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicioEventoService } from '../servicio-evento.service';
@Component({
  selector: 'app-inicio-a',
  templateUrl: './inicio-a.component.html',
  styleUrls: ['./inicio-a.component.css']
})
export class InicioAComponent implements OnInit {

eventos: Evento[];
  evento: Evento ={
    Nombre: '',
    FechaPublicacion: '',
     Fecha: '',
    Descripcion: '',
     Calificacion: '',
    ImagenesUrl: '',
     ComentariosId: '',
    ListaComentariosEvento: '',

   
  }

 constructor(private servi:ServicioEventoService) {  this.ObtenerEventos}
   PageActual:number=1;
    filterEvento ='';
 if(PageActual=0){
   PageActual=1;
 }

  ObtenerEventos(){
 this.servi.ObtenerJson().subscribe(resultado =>{
   this.eventos=resultado;
   
   console.log("Informacion ya tiene resultado");
  
 },
 error=>{
console.log(JSON.stringify(error));

 }); 
   }
  ngOnInit(): void {
  	this.ObtenerEventos();
    console.log(this.PageActual);
  }


    eliminar(id){
 

       Swal.fire({
  title: 'Estas seguro?',
  text: "El evento no se podra recuperar!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, Borrar!'
}).then((result) => {
  if (result.value) {
    Swal.fire(
      'Borrado!',
      'El evento ha sido eliminado',
      'success'
    )

      this.refrescar(id);
  this.refrescar(id);

  }
})

   
  
}
refrescar(id){
 
   console.log(id);
     this.servi.Eliminar(id);
 //this.usuarios=this.usuarios.filter(x=>x.Id==id);
 this.ObtenerEventos();
  this.ngOnInit();


}

}
