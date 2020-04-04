import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Cabana } from '../cabana.model';
import { ServiciocService  } from '../../servicioc.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicioc',
  templateUrl: './inicioc.component.html',
  styleUrls: ['./inicioc.component.css']
})
export class IniciocComponent implements OnInit {
cabanas: Cabana[];
  cabana: Cabana ={
    nombre: '',
    capacidad: '',
    precio: '',
    calificacion: '',
     imagenesUrl: '',
    comentariosId: '',
     token: '',
    listaComentariosCabana: '',

   
  }
  constructor(private servi:ServiciocService) { this.ObtenerCabana}
  ObtenerCabana(){
 this.servi.ObtenerJson().subscribe(resultado =>{
   this.cabanas=resultado;
   
   console.log("Informacion ya tiene resultado");
  
 },
 error=>{
console.log(JSON.stringify(error));

 }); 
   }
  ngOnInit(): void {
  	this.ObtenerCabana();
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
   console.log(id);
     this.servi.Eliminar(id);
 //this.usuarios=this.usuarios.filter(x=>x.Id==id);
 this.ObtenerCabana();
  this.ngOnInit();


}

}
