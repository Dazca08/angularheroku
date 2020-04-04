import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PipesModule
import { PipesModule } from '../pipes/pipes.module';

// Components
import { CabeceroAdministradorComponent } from './cabecero-administrador/cabecero-administrador.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { SeccionInformativaComponent } from './seccion-informativa/seccion-informativa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CabeceroAdministradorComponent,
    CabeceroComponent,
    PiePaginaComponent,
    GaleriaComponent,
    SeccionInformativaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [
    CabeceroAdministradorComponent,
    CabeceroComponent,
    PiePaginaComponent,
    GaleriaComponent,
    SeccionInformativaComponent
  ]
})
export class ComponentsModule { }
