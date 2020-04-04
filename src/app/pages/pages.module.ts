import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ComponentsModule
import { ComponentsModule } from '../components/components.module';
// PipesModule
import { PipesModule } from '../pipes/pipes.module';

// Pages
import { LoginComponent } from './login/login.component';
import { TableroComponent } from './tablero/tablero.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { EventosComponent } from '../components/seccion-eventos/seccion-eventos.component';
import { InicioAdministradorComponent } from './inicio-administrador/inicio-administrador.component';
import { ModuloQrComponent } from './modulo-qr/modulo-qr.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { InicioAComponent } from './eventos/inicio-a/inicio-a.component';
import { AgregarComponent } from './eventos/agregar/agregar.component';
import { EditarComponent } from './eventos/editar/editar.component';
import { PictogramasComponent } from './pictogramas/pictogramas.component';
import { InicioPComponent } from './preguntas-frecuentes/administrador/inicio-p/inicio-p.component';
import { AgregarPComponent } from './preguntas-frecuentes/administrador/agregar-p/agregar-p.component';
import { EditarPComponent } from './preguntas-frecuentes/administrador/editar-p/editar-p.component';
import { IniciocComponent } from './cabana/administrador/inicioc/inicioc.component';
import { EditarcComponent } from './cabana/administrador/editarc/editarc.component';
import { AgregarcComponent } from './cabana/administrador/agregarc/agregarc.component';
import { InicioUComponent } from './Usuarios/administrador/inicio-u/inicio-u.component';
import { EditarUComponent } from './Usuarios/administrador/editar-u/editar-u.component';
import { AgregarUComponent } from './Usuarios/administrador/agregar-u/agregar-u.component';
import { AvatarSelectorComponent } from './Usuarios/administrador/avatar-selector/avatar-selector.component';
import { VerSubscripcionesComponent } from './subscripciones/ver-subscripciones/ver-subscripciones.component';
import { EditarSubscripcionesComponent } from './subscripciones/editar-subscripciones/editar-subscripciones.component';
import { InsertSubscripcionesComponent } from './subscripciones/insert-subscripciones/insert-subscripciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ImageUploadModule } from 'angular2-image-upload';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    TableroComponent,
    ConfiguracionComponent,
    ContactanosComponent,
    EventosComponent,
    InicioAdministradorComponent,
    ModuloQrComponent,
    PreguntasFrecuentesComponent,
    InicioAComponent,
    AgregarComponent,
    EditarComponent,
    PictogramasComponent,
    InicioPComponent,
    AgregarPComponent,
    EditarPComponent,
    IniciocComponent,
    EditarcComponent,
    AgregarcComponent,
    InicioUComponent,
    EditarUComponent,
    AgregarUComponent,
    AvatarSelectorComponent,
    VerSubscripcionesComponent,
    EditarSubscripcionesComponent,
    InsertSubscripcionesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    ComponentsModule,
    PipesModule,
    CalendarModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ImageUploadModule
  ],
  exports: [
    LoginComponent,
    TableroComponent,
    ConfiguracionComponent,
    ContactanosComponent,
    EventosComponent,
    InicioAdministradorComponent,
    ModuloQrComponent,
    PreguntasFrecuentesComponent,
    InicioAComponent,
    AgregarComponent,
    EditarComponent,
    PictogramasComponent,
    InicioPComponent,
    AgregarPComponent,
    EditarPComponent,
    IniciocComponent,
    EditarcComponent,
    AgregarcComponent,
    InicioUComponent,
    EditarUComponent,
    AgregarUComponent,
    AvatarSelectorComponent,
    VerSubscripcionesComponent,
    EditarSubscripcionesComponent,
    InsertSubscripcionesComponent,
  ]
})
export class PagesModule { }
