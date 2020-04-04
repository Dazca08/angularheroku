import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TableroComponent} from './tablero/tablero.component';
import {LoginComponent} from './login/login.component';
import {ConfiguracionComponent} from './configuracion/configuracion.component';
import {ContactanosComponent} from './contactanos/contactanos.component';
import { ModuloQrComponent } from './modulo-qr/modulo-qr.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import {InicioAdministradorComponent} from './inicio-administrador/inicio-administrador.component';
import { InicioAComponent } from './eventos/inicio-a/inicio-a.component';
import { AgregarComponent } from './eventos/agregar/agregar.component';
import { EditarComponent } from './eventos/editar/editar.component';
import { InicioPComponent } from './preguntas-frecuentes/administrador/inicio-p/inicio-p.component';
import { AgregarPComponent } from './preguntas-frecuentes/administrador/agregar-p/agregar-p.component';
import { EditarPComponent } from './preguntas-frecuentes/administrador/editar-p/editar-p.component';
import { PictogramasComponent } from './pictogramas/pictogramas.component';
import { IniciocComponent } from './cabana/administrador/inicioc/inicioc.component';
import { EditarcComponent } from './cabana/administrador/editarc/editarc.component';
import { AgregarcComponent } from './cabana/administrador/agregarc/agregarc.component';
import { InicioUComponent } from './Usuarios/administrador/inicio-u/inicio-u.component';
import { EditarUComponent } from './Usuarios/administrador/editar-u/editar-u.component';
import { AgregarUComponent } from './Usuarios/administrador/agregar-u/agregar-u.component';
import { VerSubscripcionesComponent } from './subscripciones/ver-subscripciones/ver-subscripciones.component';
import { InsertSubscripcionesComponent } from './subscripciones/insert-subscripciones/insert-subscripciones.component';
import { EditarSubscripcionesComponent } from './subscripciones/editar-subscripciones/editar-subscripciones.component';
import { PuntosInteresComponent } from './puntos-interes/puntos-interes.component';

const routes: Routes = [
  {path: '', component: TableroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'contactanos', component: ContactanosComponent},
  {path: 'inicioadministrador', component: InicioAdministradorComponent},
  {path: 'moduloQr', component: ModuloQrComponent},
  {path: 'preguntasfrecuentes', component: PreguntasFrecuentesComponent},
  {path: 'inicioeventos', component: InicioAComponent},
  {path: 'agregarevento', component: AgregarComponent},
  {path: 'editarevento/:id', component: EditarComponent},
  {path: 'inicioaPf', component: InicioPComponent},
  {path: 'agregarpf', component: AgregarPComponent},
  {path: 'editarpf/:id', component: EditarPComponent},
  {path: 'pictogramas', component: PictogramasComponent},
  {path: 'inicioc', component: IniciocComponent},
  {path: 'agregarc', component: AgregarcComponent},
  {path: 'editarc/:id', component: EditarcComponent},
  {path: 'iniciou', component: InicioUComponent},
  {path: 'agregaru', component: AgregarUComponent},
  {path: 'editaru/:id', component: EditarUComponent},
  {path: 'ver_subs', component: VerSubscripcionesComponent},
  {path: 'insert_subs', component: InsertSubscripcionesComponent},
  {path: 'editar_subs/:id', component: EditarSubscripcionesComponent},
  { path: 'puntos-interes', component: PuntosInteresComponent },

  // Estas dos rutas DEBEN ser las últimas del array de rutas
  {path: '', pathMatch: 'full', redirectTo: ''},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
