import { Component, OnInit } from '@angular/core';
import { ServicioEventoService } from '../../pages/eventos/servicio-evento.service';

@Component({
  selector: 'app-seccion-eventos',
  templateUrl: './seccion-eventos.component.html',
  styleUrls: ['./seccion-eventos.component.css']
})
export class EventosComponent implements OnInit {

  fecha = Date.now();

  public minDate: Date = new Date(this.fecha);
  public maxDate: Date = new Date ('08/27/2020');
  public value: Date = new Date (this.fecha);
  Eventos: any;
  descripcion: any;
  nombre: any;

  constructor(private servicioeventoservice: ServicioEventoService) {
    this.ObtenerEventos();
  }

  ObtenerEventos() {
    this.servicioeventoservice.ObtenerJson1().subscribe(resultado => {
      this.Eventos = resultado;
      this.descripcion = this.Eventos.Descripcion;
      this.nombre = this.Eventos.Nombre;
    },
    error => {
      console.log(JSON.stringify(error));
    });
  }

  ngOnInit(): void {
    this.ObtenerEventos();
  }
}
