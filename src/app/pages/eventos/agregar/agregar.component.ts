import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Evento } from '../inicio-a/evento.model';
import { ServicioEventoService } from '../servicio-evento.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
k:string='soy k :v';
eventos: Evento[];
  evento: Evento ={
    Nombre: '',
    FechaPublicacion: Date.now().toString(),
     Fecha: '',
    Descripcion: '',
     Calificacion: '',
    ImagenesUrl: this.k,
     ComentariosId: '',
    ListaComentariosEvento: '',
    
   
  }
 @ViewChild("eventoForm") eventoForm:FormGroup;
    public respuestaImagenEnviada;
    public resultadoCarga;
   
  constructor(private formBuilder: FormBuilder,
      private servi: ServicioEventoService ,
      Router: Router  ) { }

agregar({value, valid}: {value: Evento, valid: boolean}){
 console.log(this.evento.ImagenesUrl)
console.log(this.selectedfile)
this.evento.ImagenesUrl=this.selectedfile.name.toString();
 console.log(this.evento.ImagenesUrl)
 if(this.evento.Fecha ==""){
   console.log('error');
  console.log('error seleccione una Fecha');
                     Swal.fire(
  'Por favor seleccione una  fecha para el evento !',
  'evento no  Agregado!',
  'error'
)
 }
 else if(this.selectedfile==null){
  console.log('error seleccione una imagen');
                     Swal.fire(
  'Por favor suba una imagen !',
  'evento no  Agregado!',
  'error'
)
 }
 else if(this.evento.Calificacion=='' || this.evento.Descripcion=='' || this.evento.Nombre==''){
   console.log('llene todos los campos')
             Swal.fire(
  'Por favor llene todos los campos!',
  'evento no  Agregado!',
  'error'
)
 }
 else if(this.evento.Calificacion=='0'){
 console.log('La calificacion del evento no puede ser cero')
             Swal.fire(
  ' el valor de la calificacion! no puede ser cero',
  'evento no  Agregado!',
  'error')
 }


 else{
this.servi.insertar(value)
this.cargandoImagen();
                   Swal.fire(
  'Evento agregado con exito!',
  'Evento Agregado!',
  'success'
)
    this.eventoForm.reset();

}
 
//this.eventoForm.resetForm();
  }
selectedfile:File=null;

onFileSelected(evento){
  console.log(this.k)
this.selectedfile=<File>evento.target.files[0];
this.k=this.selectedfile.name.toString();
console.log("new k "+this.k)
}


   public cargandoImagen(){
    


  console.log("si entro");
  this.servi.postFileImagen(this.selectedfile).subscribe(

      response => {
        this.respuestaImagenEnviada = response; 
        if(this.respuestaImagenEnviada <= 1){
          console.log("Error en el servidor"); 
        }else{

          if(this.respuestaImagenEnviada.code == 200 && this.respuestaImagenEnviada.status == "success"){
             console.log("enviada");
            this.resultadoCarga = 1;

          }else{
            this.resultadoCarga = 2;
          }

        }
      },
      error => {
        console.log(<any>error);
      }

    );//FIN DE METODO SUBSCRIBE


    
  }

  ngOnInit(): void {
    

  }

}
