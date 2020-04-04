import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ServicioLService } from '../../servicio-l.service';
import { Router , ActivatedRoute} from '@angular/router';
import { Pregunta } from '../inicio-p/pregunta.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar-p',
  templateUrl: './agregar-p.component.html',
  styleUrls: ['./agregar-p.component.css']
})
export class AgregarPComponent implements OnInit {
preguntas: Pregunta[];
  pregunta: Pregunta ={
    nombre: '',
    descripcion: '',
   
  }
   @ViewChild("preguntaForm") preguntaForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
      private servi: ServicioLService,
      Router: Router,
       ) { }
agregar({value, valid}: {value: Pregunta, valid: boolean}){ 
      //Agregar el nuevo cliente
      if(this.pregunta.nombre=='' || this.pregunta.descripcion==''){
            Swal.fire(
  'Por favor llene todos los campos!',
  'Pregunta no  Agregada!',
  'error'
)
      }else{
        this.servi.insertar(value);
        this.preguntaForm.reset();
                         Swal.fire(
  'Pregunta agregada con exito!',
  'Prregunta agregada!',
  'success'
)
      }

      
  }
  ngOnInit(): void {
  }

}
