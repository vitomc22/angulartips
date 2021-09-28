import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [
    CoursesComponent //NÃO ESQUECER DE DECLARAR O MUDULO AQUI, SE NAO OS COMPONENTES NAO ENXERGAM A CLASSE DENTRO DE CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule, //módulo de roteamento do angular
    MatTableModule
  ],
  exports:[MatTableModule]
})
export class CoursesModule { }
