import { Component, OnInit , ComponentFactoryResolver} from '@angular/core';
import { ServicioInfoService } from './servicio-info.service';

@Component({
  selector: 'app-seccion-informativa',
  templateUrl: './seccion-informativa.component.html',
  styleUrls: ['./seccion-informativa.component.css']
})
export class SeccionInformativaComponent implements OnInit {

  constructor(private servicioinfoservice:ServicioInfoService) {  this.ObtenerInformacion}
  Informacion:any;
  descripcion:any;
  titulo:any;
 
  ObtenerInformacion(){
 this.servicioinfoservice.ObtenerJson().subscribe(resultado =>{
   this.Informacion=resultado;
   this.descripcion=this.Informacion.descripcion;
   this.titulo=this.Informacion.property;
  
 
   console.log("Informacion ya tiene resultado");
      
 },
 error=>{
console.log(JSON.stringify(error));

 }); 
   }
  ngOnInit(): void {
  	this.ObtenerInformacion();


}
}
