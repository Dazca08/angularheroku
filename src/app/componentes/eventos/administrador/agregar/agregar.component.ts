import { Component, OnInit ,ViewChild} from '@angular/core';
//import { FlashMessagesService } from 'angular2-flash-messages';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/componentes/eventos/administrador/inicio-a/evento.model';
import { ServicioEventoService  } from 'src/app/componentes/eventos/servicio-evento.service';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
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
  @ViewChild("eventoForm") eventoForm: NgForm;
  constructor(private formBuilder: FormBuilder,
      private servi: ServicioEventoService ,
      Router: Router  ) { }
agregar({value, valid}: {value: Evento, valid: boolean}){
 
this.servi.insertar(value);

  
this.eventoForm.resetForm();

  }

  ngOnInit(): void {
    

  }

}
