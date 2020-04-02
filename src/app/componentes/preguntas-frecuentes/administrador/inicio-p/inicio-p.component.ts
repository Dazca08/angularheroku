import { Component, OnInit } from '@angular/core';
import { Pregunta } from './pregunta.model';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { ServicioLService } from 'src/app/componentes/preguntas-frecuentes/servicio-l.service';
import { Router } from '@angular/router';
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
 this.ObtenerPreguntas();
  this.ngOnInit();


}

}
