import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/componentes/preguntas-frecuentes/administrador/inicio-p/pregunta.model';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { ServicioLService } from 'src/app/componentes/preguntas-frecuentes/servicio-l.service';
@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.css']
})
export class PreguntasFrecuentesComponent implements OnInit {
preguntas: Pregunta[];
  pregunta: Pregunta ={
    nombre: '',
    descripcion: '',
   
  }
  constructor(private servi:ServicioLService) {this.ObtenerPreguntas }
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

}
