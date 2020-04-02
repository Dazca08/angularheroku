import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Evento } from './evento.model';
import { ServicioEventoService  } from 'src/app/componentes/eventos/servicio-evento.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
  }
    eliminar(id){
 
  this.refrescar(id);
  this.refrescar(id);
 /*console.log(id);
     this.servi.Eliminar(id);
 this.usuarios=this.usuarios.filter(x=>x.Id==id);
 this.ObtenerUsuarios();

this.Router.navigateByUrl('/iniciou');*/
   
  
}
refrescar(id){
       Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.value) {
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})
   console.log(id);
     this.servi.Eliminar(id);
 //this.usuarios=this.usuarios.filter(x=>x.Id==id);
 this.ObtenerEventos();
  this.ngOnInit();


}

}
