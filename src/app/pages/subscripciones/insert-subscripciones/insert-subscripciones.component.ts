import { Component, OnInit } from '@angular/core';
import { ServicioSubService } from '../servicio-sub.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscripciones } from '../subscripcion.model';

@Component({
  selector: 'app-insert-subscripciones',
  templateUrl: './insert-subscripciones.component.html',
  styleUrls: ['./insert-subscripciones.component.css']
})
export class InsertSubscripcionesComponent implements OnInit {


  

  constructor(private formBuilder: FormBuilder,
    private servi: ServicioSubService,
    Router: Router) { }

    inssub: Subscripciones[];
    insertarsub: Subscripciones ={                  
          id: '',
          subscripcion: '',
          contenidoSubscripcion: '',
          valorSubscripcion: '',
          imagen_Subscripcion: '',
          estado: ''
      
               
                  
        }

          
         
      
      agregar({value, valid}: {value: Subscripciones, valid: boolean}){
        this.servi.insertar(value);
      }


      ngOnInit(): void {
          
      }
    
/*  public InsertarSubs() {

     
    var nombre = this.InsertSubscripcion.getRawValue()['nombre_subs'];
    var descripcion = this.InsertSubscripcion.getRawValue()['desc_subs'];
    var imagenes_url = this.InsertSubscripcion.getRawValue()['imagen_url_subs'];
    var valor_subs = this.InsertSubscripcion.getRawValue()['valor_subs'];
    var estado = 1;

    var cadena = {"subscripcion":nombre,"contenido_subscripcion":descripcion,"valor_subscripcion":valor_subs,"imagenes_url":imagenes_url,"estado":estado};

    this.servi.RegistroSubscripcion(cadena).then(res => {console.log(res)}).catch(err => 
      {console.log(err)});
    console.log(cadena);
  

  }

  ngOnInit(): void {
  	this.InsertarSubs();
  }*/
   

}
