import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Puntosi } from '../puntosI.model';
import { ServiciopiService  } from 'src/app/componentes/puntosInteres/serviciopi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciopi',
  templateUrl: './iniciopi.component.html',
  styleUrls: ['./iniciopi.component.css']
})
export class IniciopiComponent implements OnInit {
puntosi: Puntosi[];
  puntoi: Puntosi ={
    Descripcion: '',
    Latitud: '',
     Longitud: '',
    Token: '',
     LastModification: '',
   
   
  }
  constructor(private servi:ServiciopiService) { this.ObtenerPuntosI }
 ObtenerPuntosI(){
 this.servi.ObtenerJson().subscribe(resultado =>{
   this.puntosi=resultado;
   
   console.log("Informacion ya tiene resultado");
  
 },
 error=>{
console.log(JSON.stringify(error));

 }); 
   }
  ngOnInit(): void {
  	this.ObtenerPuntosI();
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
  try{
   console.log(id);
     this.servi.Eliminar(id);
  
 //this.usuarios=this.usuarios.filter(x=>x.Id==id);
 this.ObtenerPuntosI();
  this.ngOnInit();
}catch(e){
  console.log("error atrapado");
}


}

}
