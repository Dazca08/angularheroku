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
//definicion de variables que almacenaran los datos 
eventos: Evento[];
  evento: Evento ={
    Nombre: '',
    FechaPublicacion: Date.now().toString(),
     Fecha: '',
    Descripcion: '',
     Calificacion: '',
    ImagenesUrl: '',
     ComentariosId: '',
    ListaComentariosEvento: '',
    
   
  }
  //se trae el formulario y se igual a form group
 @ViewChild('eventoForm') formValues;
 //variables para la carga de imagenes
    public respuestaImagenEnviada;
    public resultadoCarga;
   //se define el constructor
  constructor(private formBuilder: FormBuilder, private servi: ServicioEventoService ,
private Router: Router  ) { }
  //se define la variable que va a almacenar la imagen a traer
selectedfile:File=null;
//funcion que detecta cuando se selecciona la imagen
onFileSelected(evento){
  
//se asigna el valor del archivo entrante a la variable selectedfiles
  this.selectedfile=<File>evento.target.files[0];
//se le asigna el campo de nombre del archivo o en este caso la imagen a la variable 
//evento en su campo ImagenesUrl 
this.evento.ImagenesUrl=this.selectedfile.name.toString();


}
//funcion donde se agrega los valores del formulario , recibe un valor de tipo evento 
//el cual contendra el modelo de eventos , es decir todas la variables que lo componen
agregar({value}: {value: Evento}){

//validaciones
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
   //se inserta el formulario
this.servi.insertar(value)
//se inserta la imagen
this.cargandoImagen();
                   Swal.fire(
  'Evento agregado con exito!',
  'Evento Agregado!',
  'success'
)
    //vuelve el formulario a 0
    ///this.eventoForm.reset();
    //this.formValues.resetForm();
    this.limpiaFormulario();
    this.selectedfile=null;

    console.log(this.evento)
    console.log(this.selectedfile)

}
 
//this.eventoForm.resetForm();
  }

public limpiaFormulario(){

 
this.evento.Nombre='';
  this.evento.FechaPublicacion= Date.now().toString();
    this.evento.Fecha="";
    this.evento.Descripcion="";
     this.evento.Calificacion="";
    this.evento.ImagenesUrl="";
    this.evento.ComentariosId="";
    this.evento.ListaComentariosEvento="";
    this.Router.navigateByUrl('/agregarevento');
//this.Router.navigateByUrl('/inicioeventos');
   
  

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
