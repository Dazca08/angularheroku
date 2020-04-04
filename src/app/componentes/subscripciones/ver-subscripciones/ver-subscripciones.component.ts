import { Component, OnInit } from '@angular/core';
import { ServicioSubService } from 'src/app/componentes/subscripciones/servicio-sub.service';
import { subscribeOn } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subscripciones } from 'src/app/componentes/subscripciones/subscripcion.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ver-subscripciones',
  templateUrl: './ver-subscripciones.component.html',
  styleUrls: ['./ver-subscripciones.component.css']
})
export class VerSubscripcionesComponent implements OnInit {


  constructor(private Servicio_SubService:ServicioSubService) {  this.ObtenerSubscripcion}

    filtroSubscripcionesPost ='';
    PageActual:number=1;

    subs: Subscripciones[];  
      
    subscrip: Subscripciones ={
      
      subscripcion: "",
      contenidoSubscripcion: "",
      valorSubscripcion:"",     
    }
    

    ObtenerSubscripcion(){          
      this.Servicio_SubService.ObtenerJson().subscribe(resultado =>{
      this.subs=resultado;
          
      console.log("Informacion ya tiene resultado");
      console.log(this.subs.length)
    },
      error=>{ console.log(JSON.stringify(error));

    }); 
        
  }
    i:number;

  ngOnInit(): void {
  	this.ObtenerSubscripcion();
  }
  


}
